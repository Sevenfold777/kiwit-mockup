import * as SecureStore from 'expo-secure-store';
import {observable, runInAction} from 'mobx';
import {ACCESS_TOKEN, REFRESH_TOKEN} from '../Config';
// import messaging from '@react-native-firebase/messaging';
import {METHOD, SERVER_URL, _promise} from '../api/ApiConfig';
import jwtDecode, {JwtPayload} from 'jwt-decode';
import axios from 'axios';

const authStore = observable({
  // auth states
  isSignedIn: false,
  accessToken: '',
  userId: 0,
  name: '',
  familyId: 0,
  permissionsChecked: false,
  isTokenRefreshing: false,
  isAdvanced: true,

  setAdvanced(bool: boolean) {
    this.isAdvanced = bool;
  },

  // login action
  async loginAction({
    accessToken,
    refreshToken,
  }: {
    accessToken: string;
    refreshToken?: string;
  }) {
    runInAction(() => {
      this.isSignedIn = true;
      this.accessToken = accessToken;
    });

    await SecureStore.setItemAsync(ACCESS_TOKEN, accessToken);

    if (refreshToken) {
      await SecureStore.setItemAsync(REFRESH_TOKEN, refreshToken);
    }

    const me = await _promise(METHOD.GET, 'users/my');

    // check fcm token; 토큰이 달라졌으면 갱신
    // const fcmToken = await messaging().getToken();
    // if (fcmToken !== me?.data.fcmToken) {
    //   await _promise(METHOD.PATCH, `users`, {fcmToken});
    // }

    runInAction(() => {
      authStore.setUserId({
        userId: me?.data?.id,
        name: me?.data?.name,
      });
    });
  },

  // logout action
  async logoutAction() {
    await _promise(METHOD.PATCH, 'users', {fcmToken: ''});

    await SecureStore.deleteItemAsync(ACCESS_TOKEN);
    await SecureStore.deleteItemAsync(REFRESH_TOKEN);

    runInAction(() => {
      this.isSignedIn = false;
      this.accessToken = '';
    });
  },

  // set ids
  setUserId({userId, name}: {userId: number; name: string}) {
    if (!userId || !name) {
      return;
    }
    this.userId = userId;
    this.name = name;
  },

  setPermission(isChecked: boolean) {
    this.permissionsChecked = isChecked;
  },

  async refreshAccessToken() {
    try {
      runInAction(() => {
        this.isTokenRefreshing = true;
      });

      const refreshToken = await SecureStore.getItemAsync(REFRESH_TOKEN);
      runInAction(() => {
        if (!refreshToken) {
          this.logoutAction();
          return;
        } else {
          const refreshTokenDecoded = jwtDecode<JwtPayload>(refreshToken);
          const refreshTokenExpires = refreshTokenDecoded.exp;

          const now = new Date().getTime() / 1000;

          // refreshToken도 만료되었다면 로그아웃
          if (!refreshTokenExpires || now > refreshTokenExpires) {
            this.logoutAction();
            return;
          }
        }
      });

      // refresh ACCESS TOKEN
      const result = await axios({
        method: METHOD.PATCH,
        url: 'users/refreshToken',
        baseURL: SERVER_URL,
        data: {refreshToken},
      });

      runInAction(() => {
        if (!result || result.data?.ok === false) {
          this.logoutAction();
          return;
        }
      });

      await SecureStore.setItemAsync(ACCESS_TOKEN, result.data.accessToken);
      await SecureStore.setItemAsync(REFRESH_TOKEN, result.data.refreshToken);

      runInAction(() => {
        this.accessToken = result.data.accessToken;
        this.isTokenRefreshing = false;
      });

      return result.data.accessToken;
    } catch (e) {
      this.logoutAction();
    }
  },
});

export default authStore;

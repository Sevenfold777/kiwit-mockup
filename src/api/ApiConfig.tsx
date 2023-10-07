// import * as SecureStore from 'expo-secure-store';
import axios from 'axios';
import jwtDecode, {JwtPayload} from 'jwt-decode';
import authStore from '../stores/AuthStore';
// import {ACCESS_TOKEN, REFRESH_TOKEN} from '../Config';

// export const SERVER_URL = "http://localhost:3000"; // dev (hotspot)
// export const SERVER_URL = "http://192.168.0.3:3000";
// export const SERVER_URL = "http://192.168.35.2:3000";

export const SERVER_URL = 'https://prod-backend.wool2ga.com';
export const INVITATION_URL = 'https://invite.wool2ga.com';

/** http request method */
export enum METHOD {
  GET = 'get',
  POST = 'post',
  PATCH = 'patch',
  DELETE = 'delete',
  POST_FILES = 'postFiles',
}

/** axios skeleton */
export async function _promise(method: METHOD, url: string, body = {}) {
  // get Token
  let accessToken = authStore.accessToken;
  // console.log(accessToken);
  // console.log(url);

  if (accessToken) {
    // 단위: seconds (초)
    const accessTokenDecoded = jwtDecode<JwtPayload>(accessToken);
    const accessTokenExpires = accessTokenDecoded.exp;

    const now = Math.round(new Date().getTime() / 1000);
    // 5분 이내 token expires
    if (!accessTokenExpires) {
      return;
    } else if (now + 300 > accessTokenExpires) {
      // if (now + 120 > accessTokenExpires && !authStore.isTokenRefreshing) {
      if (!authStore.isTokenRefreshing) {
        accessToken = await authStore.refreshAccessToken();
      } else {
        // 10초 간 기다림 - 10초 지나면 request drop --> avoid 401
        let refreshed = false;
        for (let i = 0; i < 20; i++) {
          if (accessToken !== authStore.accessToken) {
            refreshed = true;
            break;
          }
          // console.log("<", i, "> ", url);
          await new Promise(res => setTimeout(res, 500));
        }

        if (!refreshed) {
          return;
        }

        accessToken = authStore.accessToken;
      }
    }
  }

  // base config
  const baseConfig = {
    method: method === METHOD.POST_FILES ? 'post' : method,
    url: url,
    baseURL: SERVER_URL,
    headers: {
      Authorization: `Bearer ${accessToken}`,
      ...(method === METHOD.POST_FILES && {
        'Content-Type': 'multipart/form-data',
      }),
    },
  };

  // Additional Config (Based on Req METHOD)
  const config =
    method === METHOD.GET ? {...baseConfig} : {...baseConfig, data: body};

  try {
    const response = await axios(config);
    return response;
  } catch (e) {
    // addtional error handling needed
    console.log(e);
  }
}

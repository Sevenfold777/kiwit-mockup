import {getProfile, login} from '@react-native-seoul/kakao-login';
import {CommonActions, useNavigation} from '@react-navigation/native';
import {useMutation} from '@tanstack/react-query';
import React from 'react';
// import {loginApi} from '../../../api/AuthApi';
import authStore from '../../../stores/AuthStore';
import BaseButton from './BaseButton';
import PropTypes from 'prop-types';
import {ROUTE_NAME} from 'Config';
import Toast from 'components/common/Toast';

export default function KakaoButton() {
  const navigation = useNavigation(); // Route Type 넣어주기

  const loginWithToken = useMutation(loginApi); // 최신 api

  const loginKakao = async () => {
    const token = await login();
    // const user = await getProfile();

    // token.idToken jwt decode 하면 result.email 구할 수 있음
    // token.accessToken은? expire 시간은 같음 but jwt decode로 안됨

    loginWithToken.mutate(
      {token: token.accessToken, provider: 'kakao'},
      {
        onSuccess: async data => {
          const {
            data: {ok, accessToken, refreshToken, signUpRequired, error},
            // config: { data: user },
          } = data;

          // const userObj = JSON.parse(user);

          if (!ok && signUpRequired) {
            // navigation.navigate(ROUTE_NAME.SIGN_UP, {
            //   userName: user.nickname,
            //   email: user.email,
            //   ...(familyJoinToken && {familyId: familyJoinToken}),
            //   provider: 'kakao',
            //   token: token.accessToken,
            // });
          } else if (!ok && !signUpRequired && error === 'INACTIVE ID') {
            Toast({message: '사용할 수 없는 계정입니다'});
          } else if (ok) {
            // 2. mobx 활용 - 전역 login State === true
            await authStore.loginAction({accessToken, refreshToken});
            // 완료 후 navigation 전환 --> LoggedInNav
          }
        },
      },
    );
  };

  return (
    <BaseButton
      bgColor="#f1d905"
      logoPath={require('../../../../assets/images/kakao.png')}
      onPress={loginKakao}
      textPayload="카카오톡으로 로그인"
    />
  );
}

KakaoButton.propTypes = {
  familyJoinToken: PropTypes.string,
};

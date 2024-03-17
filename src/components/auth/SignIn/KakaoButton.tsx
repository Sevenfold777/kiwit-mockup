import {getProfile, login} from '@react-native-seoul/kakao-login';
import {CommonActions, useNavigation} from '@react-navigation/native';
import {useMutation} from '@tanstack/react-query';
import React from 'react';
// import {loginApi} from '../../../api/AuthApi';
import authStore from '../../../stores/AuthStore';
import BaseButton from './BaseButton';
import PropTypes from 'prop-types';
import Toast from '../../common/Toast';
import {Colors} from '../../../Config';

export default function KakaoButton() {
  const navigation = useNavigation(); // Route Type 넣어주기

  const loginWithToken = useMutation<
    unknown,
    unknown,
    {token: string; provider: string}
  >(loginApi); // 최신 api

  const loginKakao = async () => {
    const token = await login();

    loginWithToken.mutate(
      {token: token.accessToken, provider: 'kakao'},
      {
        onSuccess: async data => {
          const {
            data: {ok, accessToken, refreshToken, signUpRequired, error},
            // config: { data: user },
          } = data;

          if (!ok && signUpRequired) {
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
      textColor={Colors.white}
    />
  );
}

KakaoButton.propTypes = {
  familyJoinToken: PropTypes.string,
};

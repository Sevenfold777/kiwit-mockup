import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import {Colors} from '../../../Config';
import {useNavigation} from '@react-navigation/native';
import {SignedInParams} from 'navigators/types';
import {StackScreenProps} from '@react-navigation/stack';

const LoginBtnContainer = styled.TouchableOpacity<{bgColor: string}>`
  background-color: ${props => props.bgColor};
  flex-direction: row;
  align-items: center;
  margin: 0px 24px;
  margin-top: 10px;
  border-radius: 30px;
  padding: 0px 10px;
`;

const ImageWrapper = styled.View`
  justify-content: center;
  align-items: center;
  padding: 15px 30px;
`;

const LoginBtnImg = styled.Image`
  /* padding: 10px; */
  width: 26px;
  height: 22px;
`;

const LoginBtnTextWrapper = styled.View`
  /* flex: 1; */
  border-left-width: 1px;
  border-color: ${Colors.white};
`;

const LoginBtnText = styled.Text<{textColor: string}>`
  padding: 0px 30px;
  font-size: 16px;
  color: ${props => props.textColor};
  font-family: 'nanum-bold';
`;

type Props = {
  bgColor: string;
  onPress(): void;
  logoPath: string;
  textColor: string;
  textPayload: string;
};

export default function BaseButton({
  bgColor,
  onPress,
  logoPath,
  textColor,
  textPayload,
}: Props) {
  return (
    <LoginBtnContainer bgColor={bgColor} onPress={onPress}>
      <ImageWrapper>
        <LoginBtnImg source={{uri: logoPath}} resizeMode="contain" />
      </ImageWrapper>
      <LoginBtnTextWrapper>
        <LoginBtnText textColor={textColor}>{textPayload}</LoginBtnText>
      </LoginBtnTextWrapper>
    </LoginBtnContainer>
  );
}

BaseButton.propTypes = {
  bgColor: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  logoPath: PropTypes.number.isRequired,
  textPayload: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
};

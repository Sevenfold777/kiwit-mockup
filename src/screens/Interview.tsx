import React, {useEffect, useState} from 'react';
import ScreenLayout from '../components/common/ScreenLayout';
import {SignedInScreenProps} from '../navigators/types';
import {TitleText} from '../components/common/Common';
import styled from 'styled-components/native';
import {Colors} from '../Config';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';
import {useHeaderHeight} from '@react-navigation/elements';
import {Ionicons} from '@expo/vector-icons';

const ChatRoom = styled.View`
  flex: 1;
  background-color: ${Colors.subLight};
`;

const InputContainer = styled.View`
  flex-direction: row;
  background-color: white;
  padding: 0px 10px;
`;

const InputWrapper = styled.View`
  flex: 1;
  margin: 10px 5px;
  border: 0.5px solid #aeaeae;
  min-height: 50px;
  max-height: 150px;
  border-radius: 25px;
  justify-content: center;
  padding: 10px 5px;
`;

const Input = styled.TextInput`
  margin-left: 10px;
  color: black;

  /* line-height: 18px; */
`;

const SendBtn = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background-color: ${Colors.main};
  margin: 10px 0px;
  padding: 0px 12px;
  border-radius: 10px;
  opacity: ${props => (props.disabled ? '0.5' : '1')};
`;

const SendText = styled.Text``;

export default function Interview({
  navigation,
}: SignedInScreenProps<'Interview'>) {
  const title = '백엔드 개발자 모의 면접';
  const subtitle = 'Chat-GPT를 사용한 모의면접을 통한 면접 대비';

  const [payload, setPayload] = useState('');

  useEffect(() => {
    navigation.setOptions({headerTitle: title});
  }, []);

  return (
    <ScreenLayout>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <ChatRoom>
          <TitleText>채팅 화면</TitleText>
        </ChatRoom>
      </TouchableWithoutFeedback>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={useHeaderHeight()}
        style={{width: '100%'}}>
        <InputContainer>
          <InputWrapper>
            <Input
              value={payload}
              onChangeText={setPayload}
              placeholder={'답변을 입력해주세요'}
              autoCapitalize="none"
              multiline={true}
              maxLength={100}
            />
          </InputWrapper>
          <SendBtn onPress={() => setPayload('')}>
            <Ionicons name="send" size={20} color={Colors.subLight} />
          </SendBtn>
        </InputContainer>
      </KeyboardAvoidingView>
    </ScreenLayout>
  );
}

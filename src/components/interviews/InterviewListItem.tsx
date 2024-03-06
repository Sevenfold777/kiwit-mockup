import React from 'react';
import styled from 'styled-components/native';
import {Colors} from '../../Config';
import {Ionicons} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';

const Container = styled.TouchableOpacity`
  padding: 10px 20px;
  border-radius: 10px;
  border: 1px solid ${Colors.borderLight};
  margin: 5px;
  background-color: white;
  flex-direction: row;
`;

const PayloadWrapper = styled.View`
  flex: 1;
  padding: 0px 0px 0px 5px;
`;

const TitleText = styled.Text`
  font-weight: 600;
  font-size: 15px;
  margin: 0px 15px 0px 7px;
`;

const SubTitleText = styled.Text`
  margin: 2px 15px 0px 12px;
`;

type Props = {};

export default function InterviewListItem({}: Props) {
  const navigation = useNavigation();

  const title = '백엔드 개발자 모의 면접';
  const subtitle = 'Chat-GPT를 사용한 모의면접을 통한 면접 대비';

  return (
    <Container
      onPress={() => navigation.navigate('Interview', {interviewId: 1})}>
      <Ionicons
        name="chatbubble-ellipses-outline"
        size={16}
        style={{marginTop: 3}}
      />
      <PayloadWrapper>
        <TitleText>{title}</TitleText>
        <SubTitleText>{subtitle}</SubTitleText>
      </PayloadWrapper>
    </Container>
  );
}

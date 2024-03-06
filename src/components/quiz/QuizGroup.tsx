import React from 'react';
import styled from 'styled-components/native';
import {Colors} from '../../Config';
import {Ionicons} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';

const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 15px;
  border: 1px solid ${Colors.borderLight};
  border-radius: 10px;
  margin-bottom: 7px;
  background-color: white;
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

const PercentageText = styled.Text``;

type Props = {};

export default function QuizGroup({}: Props) {
  const title = '취준생 CS 체크리스트';
  const subtitle = '면접 대비 CS 지식 확인을 필수!';
  const quizCnt = 5;

  const navigation = useNavigation();

  return (
    <Container
      onPress={() => navigation.navigate('QuizList', {groupId: 1, quizCnt: 1})}>
      <Ionicons name="pencil" />
      <PayloadWrapper>
        <TitleText numberOfLines={1}>{title}</TitleText>
        <SubTitleText>{subtitle}</SubTitleText>
      </PayloadWrapper>
      <PercentageText>{`${quizCnt}개 문제`}</PercentageText>
    </Container>
  );
}

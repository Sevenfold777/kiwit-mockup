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

const TitleText = styled.Text`
  flex: 1;
  font-weight: 600;
  margin: 0px 15px 0px 7px;
`;

const PercentageText = styled.Text``;

type Props = {title: string; percentage: number};

export default function QuizListItem({title, percentage}: Props) {
  const navigation = useNavigation();

  return (
    <Container onPress={() => navigation.navigate('Quiz', {quizId: 1})}>
      <Ionicons name="checkmark" />
      <TitleText numberOfLines={1}>{title}</TitleText>
      <PercentageText>{`정답: ${percentage}%`}</PercentageText>
    </Container>
  );
}

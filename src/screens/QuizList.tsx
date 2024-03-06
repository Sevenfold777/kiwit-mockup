import React, {useEffect} from 'react';
import ScreenLayout from '../components/common/ScreenLayout';
import {FlatList} from 'react-native';
import QuizListItem from '../components/quiz/QuizListItem';
import {SignedInScreenProps} from '../navigators/types';
import styled from 'styled-components/native';

const QuizCnt = styled.Text`
  font-size: 17px;
  /* font-weight: 600; */
  color: white;
  padding: 0px 20px 0px 10px;
`;

export default function QuizList({
  navigation,
  route: {params},
}: SignedInScreenProps<'QuizList'>) {
  const quizes = [
    {title: '객체 지향 프로그래밍의 핵심 개념', percentage: 49},
    {title: 'HTTP와 HTTPS의 차이', percentage: 14},
    {title: 'TCP와 UDP의 주요 차이', percentage: 21},
    {title: '깊이 우선 탐색(DFS)과 너비 우선 탐색(BFS)의 차이', percentage: 57},
    {title: '정적 타입 언어와 동적 타입 언어의 장단점', percentage: 15},
  ];

  const title = '취준생 CS 체크리스트';
  const subtitle = '면접 대비 CS 지식 확인을 필수!';
  const quizCnt = 5;

  useEffect(() => {
    navigation.setOptions({
      headerTitle: title,

      headerRight: () => <QuizCnt>{`${quizCnt}문제`}</QuizCnt>,
    });
  }, []);

  const renderQuiz = ({item}) => <QuizListItem {...item} />;

  return (
    <ScreenLayout>
      <FlatList
        data={quizes}
        renderItem={renderQuiz}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{padding: 10}}
      />
    </ScreenLayout>
  );
}

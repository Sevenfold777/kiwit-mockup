import React from 'react';
import styled from 'styled-components/native';
import ScreenLayout from '../components/common/ScreenLayout';
import {MainTabScreenProps} from '../navigators/types';
import {ScrollView, View, useWindowDimensions} from 'react-native';
import {Colors} from '../Config';
import {
  RowContainer,
  TitleContainer,
  TitleText,
  Wrapper,
} from '../components/common/Common';
import FastImage from 'react-native-fast-image';
import TodaysStudy from '../components/home/TodaysStudy';
import QuizListItem from '../components/quiz/QuizListItem';
import ChapterListItem from '../components/lecture/ChapterListItem';

const Attendence = styled.View<{attended: boolean}>`
  justify-content: center;
  align-items: center;
  padding: 5px;
  margin: 0px 3px;
  background-color: ${props =>
    props.attended ? Colors.sub : Colors.borderLight};
  border-radius: 5px;
  flex: 1;
`;

const AttendenceText = styled.Text<{attended: boolean}>`
  font-weight: 500;
  color: ${props => (props.attended ? Colors.white : Colors.borderDark)};
`;

const QuizList = styled.View`
  margin: 5px;
`;

export default function Home({
  navigation,
  route: {name, params},
}: MainTabScreenProps<'Home'>) {
  const {width: pageWidth} = useWindowDimensions();

  const Days = ['월', '화', '수', '목', '금', '토', '일'];
  const quizes = [
    {title: '객체 지향 프로그래밍의 핵심 개념', percentage: 49},
    {title: 'HTTP와 HTTPS의 차이', percentage: 14},
    {title: 'TCP와 UDP의 주요 차이', percentage: 21},
    {title: '깊이 우선 탐색(DFS)과 너비 우선 탐색(BFS)의 차이', percentage: 57},
    {title: '정적 타입 언어와 동적 타입 언어의 장단점', percentage: 15},
  ];

  const chapters = [
    {
      subject: '일상 속 컴퓨터',
      chapter: '모두 컴퓨터에요',
      //   chapterNum: 5,
      lectures: [
        {title: '서버도 컴퓨터에요'},
        {title: '컴퓨터 뜯어 보기'},
        {title: '우리집 인터넷은 무엇일까?'},
        {title: '스냅드래곤, 안드로이드, 갤럭시는 경쟁 대상이 아니에요'},
      ],
    },
    {
      subject: '개발자는?',
      chapter: '개발자는 왜 매번 안된다고 할까요?',
      //   chapterNum: 2,
      lectures: [
        {title: '개발 용어에는 무엇이 있을까요?'},
        {title: 'API란 무엇일까요?'},
      ],
    },
  ];

  return (
    <ScreenLayout>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{padding: 10}}>
        <TitleContainer>
          <TitleText>오늘의 진도</TitleText>
        </TitleContainer>
        <TodaysStudy />
        {/* wrapper for margin */}
        <Wrapper />

        <TitleContainer>
          <TitleText>출석 체크</TitleText>
        </TitleContainer>
        <RowContainer style={{alignItems: 'center', margin: 5}}>
          {Days.map((day, idx) => (
            <Attendence key={idx} attended={idx % 3}>
              <AttendenceText attended={idx % 3}>{day}</AttendenceText>
            </Attendence>
          ))}
        </RowContainer>
        <Wrapper />

        <TitleContainer>
          <TitleText>다 맞힐 수 있으실까요?</TitleText>
        </TitleContainer>
        <QuizList>
          {quizes.map(({title, percentage}, idx) => (
            <QuizListItem key={idx} title={title} percentage={percentage} />
          ))}
        </QuizList>
        <Wrapper />

        <TitleContainer>
          <TitleText>다시 공부하기</TitleText>
        </TitleContainer>
        {chapters.map(({subject, chapter, lectures}, idx) => (
          <ChapterListItem
            key={idx}
            index={idx + 1}
            subject={subject}
            chapter={chapter}
            progress={true}
            isPressed={false}
            onPress={() => navigation.navigate('Lecture', {lectureId: 1})}
          />
        ))}
        {chapters.map(({subject, chapter, lectures}, idx) => (
          <ChapterListItem
            key={idx}
            index={idx + 1}
            subject={subject}
            chapter={chapter}
            progress={true}
            isPressed={false}
            onPress={() => navigation.navigate('Lecture', {lectureId: 1})}
          />
        ))}

        <Wrapper />
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 30,
          }}>
          <FastImage
            style={{
              width: pageWidth - 80,
              height: ((pageWidth - 80) * 870) / 1047,
            }}
            source={require('../assets/googleAD.jpeg')}
          />
        </View>
      </ScrollView>
    </ScreenLayout>
  );
}

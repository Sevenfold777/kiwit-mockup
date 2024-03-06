import React, {useEffect, useState} from 'react';
import ScreenLayout from '../components/common/ScreenLayout';
import LectureListItem from '../components/lecture/LectureListItem';
import {SignedInScreenProps} from '../navigators/types';
import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';
import styled from 'styled-components/native';
import ChapterListItem from '../components/lecture/ChapterListItem';
import {ScrollView} from 'react-native';

const LecturesCnt = styled.Text`
  font-size: 17px;
  /* font-weight: 600; */
  color: white;
  padding: 0px 20px 0px 10px;
`;

const ChapterWrapper = styled.View``;

export default function LectureList({
  navigation,
  route: {params},
}: SignedInScreenProps<'LectureList'>) {
  useEffect(() => {
    navigation.setOptions({
      ...(params?.level !== undefined && {
        headerTitle: `Level. ${params.level}`,
      }),
      ...(params?.lecturesCnt !== undefined && {
        headerRight: () => (
          <LecturesCnt>{`총 ${params.lecturesCnt}강`}</LecturesCnt>
        ),
      }),
    });
  }, []);

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

  const [isPressed, setPressed] = useState(
    new Array(chapters.length).fill(false),
  );

  const [dummy, setDummy] = useState(1);

  return (
    <ScreenLayout>
      <ScrollView contentContainerStyle={{minHeight: '100%', padding: 10}}>
        {chapters.map(({subject, chapter, lectures}, idx) => (
          <ChapterWrapper key={idx}>
            <ChapterListItem
              key={idx}
              index={idx + 1}
              subject={subject}
              chapter={chapter}
              progress={true}
              isPressed={isPressed[idx]}
              onPress={() => {
                isPressed[idx] = !isPressed[idx];
                setPressed(isPressed);
                setDummy(dummy + 1);
              }}
            />
            {dummy && isPressed[idx] ? (
              lectures.map(({title}, index) => (
                <LectureListItem key={index} index={index + 1} title={title} />
              ))
            ) : (
              <></>
            )}
          </ChapterWrapper>
        ))}
      </ScrollView>
    </ScreenLayout>
  );
}

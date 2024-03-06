import React from 'react';
import ScreenLayout from '../components/common/ScreenLayout';
import styled from 'styled-components/native';
import {
  RowContainer,
  TitleContainer,
  TitleText,
  Wrapper,
} from '../components/common/Common';
import StatBox from '../components/mypage/StatBox';
import {ScrollView} from 'react-native';
import Menu, {MenuBorder} from '../components/mypage/Menu';
import Toast from '../components/common/Toast';
import {MainTabScreenProps, SignedInScreenProps} from '../navigators/types';

export default function MyPage({navigation}: MainTabScreenProps<'MyPage'>) {
  return (
    <ScreenLayout>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{minHeight: '100%'}}
        contentContainerStyle={{padding: 10}}>
        <TitleContainer>
          <TitleText>나의 기록</TitleText>
        </TitleContainer>
        <RowContainer style={{marginTop: 5}}>
          <StatBox
            iconName="ribbon-outline"
            title="Lv. 3"
            payload="1,000P"
            onPress={() => Toast({message: '활동 내역'})}
          />
          <StatBox
            marginLeft={10}
            marginRight={10}
            iconName="file-tray-full-outline"
            title="Lecture 완료"
            payload="21강"
            onPress={() => {
              navigation.navigate('LectureList', {level: 1, lecturesCnt: 1});
            }}
          />
          <StatBox
            iconName="create-outline"
            title="Quiz 풀이"
            payload="12개"
            onPress={() => {
              navigation.navigate('QuizList', {groupId: 1, quizCnt: 1});
            }}
          />
        </RowContainer>
        <Wrapper />
        <Menu title="Lecture 보관함" iconName="bookmark-outline" />
        <MenuBorder />
        <Menu title="Quiz 보관함" iconName="bookmark-outline" />
        <MenuBorder />
        <Menu title="개인정보 관리" iconName="person-outline" />
        <MenuBorder />
        <Menu title="결제 플랜" iconName="logo-bitcoin" />
        <MenuBorder />
        <Menu title="알림 설정" iconName="notifications-outline" />
        <MenuBorder />
        <Menu title="서비스 정책" iconName="book-outline" />
      </ScrollView>
    </ScreenLayout>
  );
}

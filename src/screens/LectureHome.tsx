import React from 'react';
import styled from 'styled-components/native';
import {MainTabScreenProps} from '../navigators/types';
import ScreenLayout from '../components/common/ScreenLayout';
import {FlatList, useWindowDimensions} from 'react-native';
import LevelListItem, {LevelProps} from '../components/lecture/LevelListItem';
import {Colors} from '../Config';
import {Title, TitleText} from '../components/common/Common';
import FastImage from 'react-native-fast-image';

const StartContainer = styled.View`
  padding: 0px 10px 10px 10px;
  justify-content: center;
  align-items: center;
`;

const StartBtn = styled.TouchableOpacity`
  /* flex: 1; */
  justify-content: center;
  align-items: center;
  padding: 15px 10px;
  border-radius: 10px;
  background-color: ${Colors.main};
  width: 100%;
`;

const StartText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: 600;
`;

export default function LectureHome({}: MainTabScreenProps<'LectureHome'>) {
  const {width: pageWidth} = useWindowDimensions();

  const levels = [
    {level: 0, title: '그게 뭐야... 무서워요!', lecturesCnt: '2'},
    {level: 1, title: '전 뉴비에요!', lecturesCnt: '5'},
    {level: 2, title: '자료구조는 들어 봤어요!', lecturesCnt: '7'},
    {level: 3, title: '3학년... 살려주세요', lecturesCnt: '3'},
    {level: 4, title: '취준생입니다 🥲', lecturesCnt: '12'},
    {level: 5, title: '이직하고자 합니다 허허', lecturesCnt: '3'},
  ];

  const renderLevels = ({item}: {item: LevelProps}) => (
    <LevelListItem {...item} myLevel={1} />
  );

  return (
    <ScreenLayout>
      <FastImage
        style={{
          width: pageWidth,
          height: (pageWidth * 297) / 1440,
          // marginTop: 15,
        }}
        source={require('../assets/bannerAD.jpeg')}
      />
      <FlatList
        data={levels}
        renderItem={renderLevels}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{minHeight: '100%', padding: 10}}
        // onRefresh={refresh}
        // refreshing={isRefreshing}
        // onEndReached={() => {
        //   if (!isLast && !isLoading) {
        //     fetchMore();
        //   }
        // }}
        // onEndReachedThreshold={0.01}
        // scrollEnabled={!isLoading}
        // ListHeaderComponent={() => (
        //   <StartContainer>
        //     <Title>
        //       <TitleText>이어 가기</TitleText>
        //     </Title>
        //     <StartBtn>
        //       <StartText>바로가기</StartText>
        //     </StartBtn>
        //   </StartContainer>
        // )}
      />
      {/* <StartContainer>
        <StartBtn>
          <StartText>바로가기</StartText>
        </StartBtn>
      </StartContainer> */}
    </ScreenLayout>
  );
}

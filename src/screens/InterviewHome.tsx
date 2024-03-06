import React from 'react';
import styled from 'styled-components/native';
import {MainTabScreenProps} from '../navigators/types';
import ScreenLayout from '../components/common/ScreenLayout';
import FastImage from 'react-native-fast-image';
import {ScrollView, useWindowDimensions} from 'react-native';
import InterviewListItem from '../components/interviews/InterviewListItem';

const Wrapper = styled.View`
  padding: 10px;
`;

const SampleText = styled.Text`
  font-size: 20px;
`;

export default function InterviewHome({}: MainTabScreenProps<'InterviewHome'>) {
  const {width: pageWidth} = useWindowDimensions();

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
      <ScrollView
        contentContainerStyle={{padding: 10}}
        showsVerticalScrollIndicator={false}>
        <InterviewListItem />
        <InterviewListItem />
        <InterviewListItem />
      </ScrollView>
      {/* <FlatList
        data={levels}
        renderItem={renderLevels}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{minHeight: '100%', padding: 10}}/> */}
    </ScreenLayout>
  );
}

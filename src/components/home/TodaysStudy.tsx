import React from 'react';
import styled from 'styled-components/native';
import {Colors} from '../../Config';
import FastImage from 'react-native-fast-image';
import propTypes from 'prop-types';
import {RowContainer} from '../common/Common';
import {useNavigation} from '@react-navigation/native';

const Container = styled.View`
  padding: 10px 20px;
  border-radius: 10px;
  border: 1px solid ${Colors.borderLight};
  margin: 5px;
  background-color: white;
`;

const LectureContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: 15px;
`;

const ImageWrapper = styled.View`
  width: 110px;
  border-radius: 10px;
  border: 1px solid ${Colors.borderLight};
  margin: 5px 0px;
  /* aspect-ratio: 1; */
`;

const PayloadContainer = styled.View`
  flex: 1;
  padding: 10px 0px 10px 10px;
  margin-left: 10px;
`;

const LectureName = styled.View`
  /* padding: 5px 0px; */
  flex: 1;
`;

const LectureNameText = styled.Text`
  font-weight: 600;
  margin-bottom: 5px;
`;

const StartBtn = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 12px 10px;
  border-radius: 10px;
`;

const StartText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: 600;
`;

const ProgressBarWrapper = styled.View`
  border-radius: 20px;
  overflow: hidden;
  flex-direction: row;
  background-color: red;
  margin-top: 10px;
`;

const ProgressBar = styled.View`
  justify-content: center;
  padding: 1px 10px;
  align-items: center;
`;

const ProgressBox = styled.View`
  padding: 7px;
  background-color: ${Colors.sub};
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

const ProgressText = styled.Text`
  color: white;
  font-weight: 500;
`;

type Props = {};

export default function TodaysStudy({}: Props) {
  const navigation = useNavigation();

  const dockerThumbnail =
    'https://subicura.com/generated/assets/article_images/2017-01-19-docker-guide-for-beginners-1/docker-logo-800-b3c79c1cb.png';

  return (
    <Container>
      <LectureContainer>
        <ImageWrapper>
          <FastImage
            style={{
              width: 110,
              aspectRatio: 1,
              borderRadius: 10,
            }}
            source={{uri: dockerThumbnail}}
          />
        </ImageWrapper>
        <PayloadContainer>
          <RowContainer style={{flex: 1, alignItems: 'flex-start'}}>
            <LectureName>
              <LectureNameText>{'[ 디자인 패턴 ]'}</LectureNameText>
              <LectureNameText>{' Chapter 2. MVC 패턴'}</LectureNameText>

              <ProgressBarWrapper>
                <ProgressBar style={{backgroundColor: Colors.sub, flex: 7}}>
                  <ProgressText>70%</ProgressText>
                </ProgressBar>
                <ProgressBar
                  style={{
                    backgroundColor: Colors.borderLight,
                    flex: 3,
                  }}
                />
              </ProgressBarWrapper>
            </LectureName>
          </RowContainer>
        </PayloadContainer>
      </LectureContainer>
      <RowContainer>
        <StartBtn
          style={{backgroundColor: Colors.borderDark, marginRight: 3}}
          onPress={() => navigation.navigate('Lecture', {lectureId: 1})}>
          <StartText>복습하기</StartText>
        </StartBtn>
        <StartBtn
          style={{backgroundColor: Colors.main, marginLeft: 3}}
          onPress={() => navigation.navigate('Lecture', {lectureId: 1})}>
          <StartText>학습하기</StartText>
        </StartBtn>
      </RowContainer>
    </Container>
  );
}

TodaysStudy.propTypes = {
  // pageWidth: propTypes.number.isRequired,
};

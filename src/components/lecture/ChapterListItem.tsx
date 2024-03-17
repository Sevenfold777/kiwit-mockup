import React, {useState} from 'react';
import styled from 'styled-components/native';
import {Colors} from '../../Config';
import FastImage from 'react-native-fast-image';
import propTypes from 'prop-types';
import {RowContainer} from '../common/Common';
import {Ionicons} from '@expo/vector-icons';

const Container = styled.TouchableOpacity`
  padding: 10px 20px;
  border-radius: 10px;
  border: 1px solid ${Colors.borderLight};
  margin: 5px;
  background-color: white;
`;

const ImageWrapper = styled.View`
  width: 80px;
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
  line-height: 16px;
`;

const StartBtn = styled.TouchableOpacity`
  background-color: ${Colors.main};
  justify-content: center;
  align-items: center;
  padding: 10px 10px;
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
  margin-right: 10px;
`;

const ProgressBar = styled.View`
  justify-content: center;
  padding: 5px 10px;
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

type Props = {
  index: number;
  subject: string;
  chapter: string;
  progress?: boolean;
  isPressed: boolean;
  onPress: () => void;
};

export default function ChapterListItem({
  index,
  subject,
  chapter,
  progress = false,
  isPressed,
  onPress,
}: Props) {
  const dockerThumbnail =
    'https://subicura.com/generated/assets/article_images/2017-01-19-docker-guide-for-beginners-1/docker-logo-800-b3c79c1cb.png';

  return (
    <Container onPress={onPress}>
      <RowContainer style={{alignItems: 'center'}}>
        <ImageWrapper>
          <FastImage
            style={{
              width: 80,
              aspectRatio: 1,
              borderRadius: 10,
            }}
            source={{
              uri: dockerThumbnail,
            }}
          />
        </ImageWrapper>
        <PayloadContainer>
          <RowContainer style={{flex: 1, alignItems: 'center'}}>
            <LectureName>
              <LectureNameText
                numberOfLines={1}>{`[ ${subject} ]`}</LectureNameText>
              <LectureNameText
                style={{
                  marginLeft: 10,
                }}>{`- ${chapter}`}</LectureNameText>
            </LectureName>
          </RowContainer>
          {progress ? (
            <ProgressBarWrapper>
              {index === 1 ? (
                <ProgressBar style={{backgroundColor: Colors.sub, flex: 7}} />
              ) : (
                <></>
              )}
              <ProgressBar
                style={{backgroundColor: Colors.borderLight, flex: 3}}
              />
            </ProgressBarWrapper>
          ) : (
            <></>
          )}
        </PayloadContainer>
        <Ionicons
          name={isPressed ? 'chevron-up' : 'chevron-down'}
          size={16}
          color={Colors.borderDark}
          style={{marginLeft: 10}}
        />
      </RowContainer>
    </Container>
  );
}

ChapterListItem.propTypes = {
  index: propTypes.number.isRequired,
  subject: propTypes.string.isRequired,
  chapter: propTypes.string.isRequired,
  progress: propTypes.bool,
  isPressed: propTypes.bool.isRequired,
  onPress: propTypes.func,
};

import React from 'react';
import styled from 'styled-components/native';
import {Colors, LvColors} from '../../Config';
import {RowContainer} from '../common/Common';
import {Ionicons} from '@expo/vector-icons';
import Toast from '../common/Toast';
import {useNavigation} from '@react-navigation/native';
import {SignedInParams, SignedInScreenProps} from '../../navigators/types';

const Container = styled.TouchableOpacity`
  padding: 10px 20px;
  border-radius: 10px;
  border: 1px solid ${Colors.borderLight};
  margin: 5px 0px;
  background-color: white;
`;

const Locked = styled.View`
  background-color: black;
  opacity: 0.5;
  width: 110px;
  border-radius: 10px;
  margin: 5px 0px;
  aspect-ratio: 4/3;
  justify-content: center;
  align-items: center;
`;

const ImageWrapper = styled.View<{width: number}>`
  width: 110px;
  border-radius: 10px;
  border: 1px solid ${Colors.borderLight};
  margin: 5px 0px;
  aspect-ratio: 4/3;
  justify-content: center;
  align-items: center;
`;

const ImageText = styled.Text`
  font-size: 18px;
  font-weight: 600;
`;

const PayloadContainer = styled.View`
  flex: 1;
  padding: 10px 0px 10px 10px;
  margin-left: 10px;
`;

const Level = styled.View`
  /* padding: 5px 0px; */
  flex: 1;
`;

const LevelText = styled.Text`
  font-weight: 600;
  margin-bottom: 5px;
`;

const LecturesCnt = styled.Text``;

export type LevelProps = {
  level: number;
  title: string;
  lecturesCnt: number;
  myLevel: number;
};

export default function LevelListItem({
  level,
  title,
  lecturesCnt,
  myLevel,
}: LevelProps) {
  const navigation = useNavigation();

  return (
    <Container
      onPress={() => {
        if (myLevel < level) {
          Toast({
            message:
              '낮은 레벨을 먼저 완료하거나\n포인트를 사용하여\n레벨을 오픈하세요',
          });
        } else {
          navigation.navigate('LectureList', {level, lecturesCnt});
        }
      }}>
      <RowContainer style={{alignItems: 'flex-start'}}>
        {myLevel >= level ? (
          <ImageWrapper style={{backgroundColor: Colors.subLight}}>
            <ImageText>{`레벨 ${level}`}</ImageText>
          </ImageWrapper>
        ) : (
          <Locked>
            <Ionicons name="lock-closed" color={'white'} size={20} />
          </Locked>
        )}
        <PayloadContainer>
          <RowContainer style={{flex: 1, alignItems: 'flex-start'}}>
            <Level>
              <LevelText>{`Level. ${level}`}</LevelText>
              <LevelText>{`  ${title}`}</LevelText>
            </Level>
          </RowContainer>
          <LecturesCnt>{`  + ${lecturesCnt} Chapter`}</LecturesCnt>
        </PayloadContainer>
      </RowContainer>
    </Container>
  );
}

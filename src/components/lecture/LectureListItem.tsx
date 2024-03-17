import React from 'react';
import styled from 'styled-components/native';
import {Colors} from '../../Config';
import FastImage from 'react-native-fast-image';
import propTypes from 'prop-types';
import {RowContainer} from '../common/Common';
import {Ionicons} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';

const Container = styled.TouchableOpacity`
  padding: 10px 20px;
  /* border-radius: 10px; */
  margin: 5px;
  background-color: white;
`;

const Index = styled.View`
  width: 50px;
  aspect-ratio: 1;
  border-radius: 25px;
  margin: 5px 0px;
  justify-content: center;
  align-items: center;
`;

const IndexText = styled.Text`
  font-size: 16px;
  font-weight: 600;
`;

const PayloadContainer = styled.View`
  flex: 1;
  padding: 10px 10px 10px 10px;
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
  background-color: red;
`;

const ProgressBar = styled.View`
  justify-content: center;
  padding: 5px 10px;
  align-items: center;
`;

const ProgressBox = styled.View`
  width: 25px;
  aspect-ratio: 1;
  border-radius: 12.5px;
  background-color: ${Colors.sub};
  justify-content: center;
  align-items: center;
`;

const ProgressText = styled.Text`
  color: white;
  font-weight: 500;
`;

type Props = {index: number; title: string; isLast?: boolean};

export default function LectureListItem({index, title, isLast}: Props) {
  const navigation = useNavigation();

  return (
    <Container onPress={() => navigation.navigate('Lecture', {lectureId: 1})}>
      <RowContainer style={{alignItems: 'center'}}>
        <Index
          style={{
            backgroundColor: index < 3 ? Colors.sub : Colors.borderLight,
          }}>
          <IndexText>{`${index}`.padStart(2, '0')}</IndexText>
        </Index>
        <PayloadContainer>
          <RowContainer
            style={{
              flex: 1,
              alignItems: 'center',
              borderBottomWidth: 1,
              borderBottomColor: Colors.borderLight,
            }}>
            <LectureName>
              <LectureNameText>{title}</LectureNameText>
            </LectureName>
          </RowContainer>
        </PayloadContainer>
        {/* {index < 3 ? (
          <ProgressBox>
            <Ionicons name="checkmark" color={'white'} />
          </ProgressBox>
        ) : (
          <></>
        )} */}
      </RowContainer>
    </Container>
  );
}

LectureListItem.propTypes = {
  // pageWidth: propTypes.number.isRequired,
  index: propTypes.number.isRequired,
  title: propTypes.string.isRequired,
  isLast: propTypes.bool,
};

import React from 'react';
import styled from 'styled-components/native';
import {Colors} from '../../Config';
import FastImage from 'react-native-fast-image';
import propTypes from 'prop-types';

const Container = styled.TouchableOpacity`
  padding: 10px 25px;
  border-radius: 10px;
  border: 1px solid ${Colors.borderLight};
  margin-bottom: 7px;
`;

const DrinkImageWrapper = styled.View<{width: number}>`
  width: ${props => props.width}px;
  border-radius: 10px;
  border: 1px solid ${Colors.borderLight};
  margin: 5px 0px;
  /* aspect-ratio: 1; */
`;

const DrinkName = styled.View`
  padding: 5px 0px;
`;

const DrinkNameText = styled.Text`
  font-weight: bold;
`;

type Props = {
  pageWidth: number;
};

export default function DRPreview({pageWidth}: Props) {
  const photoWidth = Math.floor(pageWidth / 3);

  return (
    <Container>
      <DrinkName>
        <DrinkNameText>{'The Glendronach 18 Year Old'}</DrinkNameText>
      </DrinkName>
      <DrinkImageWrapper width={photoWidth}>
        <FastImage
          style={{
            width: photoWidth,
            aspectRatio: 1,
          }}
          source={require('../../assets/drinks/whisky/glendronach_18yo.png')}
        />
      </DrinkImageWrapper>
    </Container>
  );
}

DRPreview.propTypes = {
  pageWidth: propTypes.number.isRequired,
};

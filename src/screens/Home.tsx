import React from 'react';
import styled from 'styled-components/native';
import ScreenLayout from '../components/common/ScreenLayout';
import {MainTabScreenProps} from '../navigators/types';
import {TouchableOpacity, useWindowDimensions} from 'react-native';
import DRPreview from '../components/drinks/DRPreview';

const Container = styled.View`
  padding: 10px;
`;

export default function Home({
  navigation,
  route: {name, params},
}: MainTabScreenProps<'Home'>) {
  const {width: pageWidth} = useWindowDimensions();

  return (
    <ScreenLayout>
      <Container>
        <DRPreview pageWidth={pageWidth} />
        <DRPreview pageWidth={pageWidth} />
        <DRPreview pageWidth={pageWidth} />
      </Container>
    </ScreenLayout>
  );
}

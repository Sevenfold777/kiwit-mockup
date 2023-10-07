import React from 'react';
import styled from 'styled-components/native';
import {MainTabScreenProps} from '../navigators/types';

const Container = styled.View`
  flex: 1;
`;

const SampleText = styled.Text`
  font-size: 20px;
`;

export default function Search({}: MainTabScreenProps<'Search'>) {
  return (
    <Container>
      <SampleText>Search</SampleText>
    </Container>
  );
}

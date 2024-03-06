import React from 'react';
import ScreenLayout from '../components/common/ScreenLayout';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
`;

const SampleText = styled.Text`
  font-size: 20px;
`;

export default function Notifications({}) {
  return (
    <Container>
      <SampleText>Notif</SampleText>
    </Container>
  );
}

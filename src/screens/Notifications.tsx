import React from 'react';
import ScreenLayout from '../components/common/ScreenLayout';
import styled from 'styled-components/native';

const SampleText = styled.Text`
  font-size: 20px;
`;

export default function Notifications({}) {
  return (
    <ScreenLayout>
      <SampleText>Notifications</SampleText>
    </ScreenLayout>
  );
}

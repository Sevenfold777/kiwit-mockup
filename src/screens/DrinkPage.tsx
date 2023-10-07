import React from 'react';
import ScreenLayout from '../components/common/ScreenLayout';
import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native';
import {SignedInScreenProps} from '../navigators/types';

const Container = styled.View`
  flex: 1;
`;

const SampleText = styled.Text`
  font-size: 20px;
`;

export default function DrinkPage({
  navigation,
  route: {name},
}: SignedInScreenProps<'DrinkPage'>) {
  return (
    <ScreenLayout>
      <Container>
        <SampleText>{name}</SampleText>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('MainTabNav', {
              screen: 'Home',
              params: {date: 1},
            });
          }}
          style={{
            padding: 10,
            backgroundColor: '#fead',
            margin: 10,
            borderRadius: 10,
          }}>
          <SampleText>Home</SampleText>
        </TouchableOpacity>
      </Container>
    </ScreenLayout>
  );
}

import React from 'react';
import styled from 'styled-components/native';
import ScreenLayout from '../components/common/ScreenLayout';
import {MainTabScreenProps} from '../navigators/types';
import {TouchableOpacity} from 'react-native';

const Container = styled.View`
  flex: 1;
`;

const SampleText = styled.Text`
  font-size: 20px;
`;

export default function Home({
  navigation,
  route: {name, params},
}: MainTabScreenProps<'Home'>) {
  console.log(params);

  return (
    <ScreenLayout>
      <Container>
        <SampleText>{name}</SampleText>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('DrinkPage', {id: 10});
          }}
          style={{
            padding: 10,
            backgroundColor: '#fead',
            margin: 10,
            borderRadius: 10,
          }}>
          <SampleText>Drink Page</SampleText>
        </TouchableOpacity>
      </Container>
    </ScreenLayout>
  );
}

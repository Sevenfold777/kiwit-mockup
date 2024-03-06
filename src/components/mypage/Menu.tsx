import React from 'react';
import styled from 'styled-components/native';
import {Colors} from '../../Config';
import {Ionicons} from '@expo/vector-icons';

const Container = styled.TouchableOpacity`
  padding: 15px 10px;
  margin: 0px 0px 5px 0px;
  flex-direction: row;
  align-items: center;
`;

const MenuText = styled.Text`
  font-size: 16px;
  font-weight: 500;
  margin: 0px 10px;
`;

export const MenuBorder = styled.View`
  margin: 0px 15px;
  border-color: ${Colors.borderLight};
  border-width: 0.5px;
`;

type Props = {title: string; iconName: keyof typeof Ionicons.glyphMap};

export default function Menu({title, iconName}: Props) {
  return (
    <Container>
      <Ionicons name={iconName} size={18} />
      <MenuText>{title}</MenuText>
    </Container>
  );
}

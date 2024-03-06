import React from 'react';
import styled from 'styled-components/native';
import {Colors} from '../../Config';
import {Ionicons} from '@expo/vector-icons';

const Container = styled.TouchableOpacity`
  flex: 1;
  border: 1px solid ${Colors.borderLight};
  border-radius: 10px;
  padding: 10px;
  justify-content: center;
  align-items: flex-start;
`;

const Icon = styled.View`
  justify-content: center;
  align-items: center;
  padding: 5px;
  border: 0.5px solid;
  border-radius: 15px;
  margin: 0px 0px 5px 0px;
`;

const Payload = styled.View`
  align-items: flex-end;
  padding: 5px;
  width: 100%;
`;

const PayloadText = styled.Text`
  font-size: 16px;
  font-weight: 500;
`;

type Props = {
  marginRight?: number;
  marginLeft?: number;
  iconName: keyof typeof Ionicons.glyphMap;
  title: string;
  payload: string;
  onPress: () => void;
};

export default function StatBox({
  marginLeft = 0,
  marginRight = 0,
  iconName,
  title,
  payload,
  onPress,
}: Props) {
  return (
    <Container
      style={{marginLeft: marginLeft, marginRight: marginRight}}
      onPress={onPress}>
      <Icon>
        <Ionicons name={iconName} size={18} />
      </Icon>
      <Payload>
        <PayloadText>{title}</PayloadText>
        <PayloadText>{payload}</PayloadText>
      </Payload>
    </Container>
  );
}

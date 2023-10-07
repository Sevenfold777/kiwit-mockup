import styled from 'styled-components/native';

export const RowContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Prompt = styled.View`
  padding: 10px 10px 0px 10px;
  margin-left: 7px;
`;

export const PromptText = styled.Text`
  /* font-family: 'nanum-bold'; */
  font-size: 16px;
`;

export const ActivityIndicatorWrapper = styled.View`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  justify-content: center;
  align-items: center;
`;

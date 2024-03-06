import styled from 'styled-components/native';
import {Colors} from '../../Config';

export const RowContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.View`
  /* padding: 10px 10px 0px 10px; */
  padding: 10px;
  /* margin-left: 7px; */
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

export const Wrapper = styled.View`
  padding: 10px;
`;

// Title for common pages
export const TitleContainer = styled.View`
  justify-content: center;
  padding: 5px;
`;

export const TitleText = styled.Text`
  font-size: 18px;
  font-weight: 600;
`;

// payload for common pages
export const Chapter = styled.View`
  padding: 30px 30px 0px 30px;
`;

export const Payload = styled.View`
  flex: 1;
  padding: 30px;
`;

export const PayloadText = styled.Text`
  /* font-family: 'lecture-semiBold'; */
  font-family: 'sejong-regular';
  font-size: 20px;
  line-height: 30px;
`;

export const PaginationDotWrapper = styled.View`
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

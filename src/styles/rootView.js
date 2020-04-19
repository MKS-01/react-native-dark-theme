import styled from 'styled-components/native';
import {scaleSize, scaleFont} from './mixins';

export const RootSafeAreaView = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props) => props.theme.background};
  justify-content: center;
`;

export const RootView = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.rootBackground};
  padding: ${scaleSize(20)}px;
`;

export const TitleView = styled.View`
  margin: ${scaleSize(10)}px 0;
`;

export const TitleText = styled.Text`
  color: ${(props) => props.theme.text};
  font-size: ${scaleFont(22)}px;
  font-weight: bold;
`;

export const TextContainer = styled.View`
  margin: ${scaleSize(15)}px 0;
`;

export const TextView = styled.Text`
  color: ${(props) => props.theme.subText};
  font-size: ${scaleFont(15)}px;
  text-align: justify;
`;

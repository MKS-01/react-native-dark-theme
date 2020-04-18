import styled from 'styled-components/native';
import {scaleSize} from './mixins';

export const Card = styled.View`
  width: 100%;
  border: 1px solid ${(props) => props.theme.cardBorder};
  border-radius: ${scaleSize(3)}px;
  background-color: ${(props) => props.theme.cardBackground};
  padding: ${scaleSize(18)}px ${scaleSize(22)}px ${scaleSize(14)}px;
  justify-content: center;
  align-items: center;
  box-shadow: ${scaleSize(5)}px ${scaleSize(5)}px ${scaleSize(8)}px
    ${(props) => props.theme.shadowEffect};
`;

export const ImageView = styled.Image`
  height: ${scaleSize(300)}px;
  width: ${scaleSize(300)}px;
  border-radius: ${scaleSize(4)}px;
`;

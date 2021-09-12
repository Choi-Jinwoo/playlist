import styled from 'styled-components';

type Props = {
  size?: string;
  weight?: 'bold' | 'bolder' | 'light' | 'lighter';
  color?: string;
  margin?: {
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
  };
}

const Text = styled.p<Props>`
  font-size: ${props => props.size ?? props.theme.fontSize.medium};
  font-weight: ${props => props.weight ?? 'normal'};
  color: ${props => props.color ?? props.theme.color.black};
  margin-top: ${props => props.margin?.top ?? 0}px;
  margin-bottom: ${props => props.margin?.bottom ?? 0}px;
  margin-left: ${props => props.margin?.left ?? 0}px;
  margin-right: ${props => props.margin?.right ?? 0}px;
`;

export default Text;

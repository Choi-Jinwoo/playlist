import styled from 'styled-components';

type Props = {
  size?: string;
  weight?: 'bold' | 'bolder' | 'light' | 'lighter';
  color?: string;
}

const Text = styled.span<Props>`
  font-size: ${props => props.size ?? props.theme.fontSize.medium};
  font-weight: ${props => props.weight ?? 'normal'};
  color: ${props => props.color ?? props.theme.color.black}
`;

export default Text;

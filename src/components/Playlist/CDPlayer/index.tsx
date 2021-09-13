import React from 'react';
import styled, { keyframes } from 'styled-components';

const Container = styled.div``;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const CD = styled.div`
  background-color: ${props => props.theme.color.black};
  position: relative;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  overflow: hidden;
  animation: ${rotate} 8s linear infinite;
`;

const CDImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CDHole = styled.div`
  position: absolute;
  background-color: ${props => props.theme.color.white2};
  bottom: calc(50% - 50px);
  left: calc(50% - 50px);
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 10px solid ${props => props.theme.color.main1}80;
`;

type Props = {
  thumbnail: string;
}

const CDPlayer = ({ thumbnail }: Props): JSX.Element => {
  return (
    <Container>
      <CD>
        <CDHole />
        <CDImage src={thumbnail} />
      </CD>
    </Container>
  );
};

export default CDPlayer;

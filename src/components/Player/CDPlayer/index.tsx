import React from 'react';
import styled, { css, keyframes } from 'styled-components';

const Container = styled.div``;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

type CDProps = {
  isPaused: boolean;
}

const CD = styled.div<CDProps>`
  background-color: ${props => props.theme.color.white};
  position: relative;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  overflow: hidden;
  animation: ${rotate} 8s linear infinite;
  ${props => props.isPaused && css`
    animation-play-state: paused;
  `}
`;

const CDImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  animation: ${fadeIn} 1s;
`;

const HOLE_SIZE = 120;

const CDHole = styled.div`
  position: absolute;
  background-color: ${props => props.theme.color.white2};
  background-clip: padding-box;
  bottom: calc(50% - ${HOLE_SIZE / 2}px);
  left: calc(50% - ${HOLE_SIZE / 2}px);
  width: ${HOLE_SIZE}px;
  height: ${HOLE_SIZE}px;
  border-radius: 50%;
  border: 16px solid ${props => props.theme.color.main1}80;
  z-index: 2;
`;

type Props = {
  thumbnail: string;
  isPaused: boolean;
}

const CDPlayer = ({ thumbnail, isPaused }: Props): JSX.Element => {
  return (
    <Container>
      <CD isPaused={isPaused}>
        <CDHole />
        <CDImage src={thumbnail} alt="album image" />
      </CD>
    </Container>
  );
};

export default CDPlayer;

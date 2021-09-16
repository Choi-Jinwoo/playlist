import React from 'react';
import { FaSpinner } from 'react-icons/fa';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
    opacity: 1;
  }

  50% {
    opacity: 0.5;
  }

  to {
    transform: rotate(360deg);
  }
`;

const Container = styled.div`
  width: 100%;
  padding: 20px;
`;

const Indicator = styled(FaSpinner)`
  animation: ${rotate} 1.5s ease-out infinite;
  font-size: ${props => props.theme.fontSize.xxLarge};
  color: ${props => props.theme.color.main1};
`;

const LoadingIndicator = (): JSX.Element => {
  return (
    <Container>
      <Indicator />
    </Container>
  )
};

export default LoadingIndicator;

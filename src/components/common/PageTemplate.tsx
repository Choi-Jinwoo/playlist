import React from 'react';
import styled from 'styled-components';

const Container = styled.div``;

const Contents = styled.div`
  width: ${props => props.theme.innerWidth.desktop};
  margin: 0 auto;
`;

type Props = {
  children: JSX.Element | JSX.Element[];
}

const PageTemplate = ({ children }: Props): JSX.Element => {
  return (
    <Container>
      <Contents>
        {children}
      </Contents>
    </Container>
  );
};

export default PageTemplate;

import React from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';
import { composeMediaQuery } from '../../utils/css';

const Container = styled.div``;

const Contents = styled.div`
  width: ${props => props.theme.innerWidth.desktop};
  padding: 20px 0px;
  margin: 0 auto;

  ${composeMediaQuery({
    tablet: `width: ${theme.innerWidth.tablet};`,
    mobile: `width: ${theme.innerWidth.mobile}`,
  })}
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

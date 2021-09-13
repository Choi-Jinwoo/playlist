import React from 'react';
import styled from 'styled-components';
import DirectoryList from '../components/Directory/DirectoryList';

const Container = styled.div``;

const HomePage = (): JSX.Element => {
  return (
    <Container>
      <DirectoryList />
    </Container>
  );
};

export default HomePage;

import React from 'react';
import styled from 'styled-components';
import useDirectories from '../../../hooks/useDirectories';
import DirectoryItem from '../DirectoryItem';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  row-gap: 20px;
`;

const DirectoryList = (): JSX.Element => {
  const [directories] = useDirectories();

  const DirectoryItems = directories
    .map(directory => <DirectoryItem key={directory.id} directory={directory} />);

  return (
    <Container>
      {DirectoryItems}
    </Container>
  );
};

export default DirectoryList;

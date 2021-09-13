import React from 'react';
import PageTemplate from '../components/common/PageTemplate';
import DirectoryList from '../components/Home/Directory/DirectoryList';

const HomePage = (): JSX.Element => {
  return (
    <PageTemplate>
      <DirectoryList />
    </PageTemplate>
  );
};

export default HomePage;

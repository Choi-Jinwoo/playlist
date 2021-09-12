import React from 'react';
import { Route } from 'react-router';
import PageTemplate from './components/common/PageTemplate';
import HomePage from './pages/HomePage';

const Routes = (): JSX.Element => {
  return (
    <PageTemplate>
      <Route exact path="/" component={HomePage} />
    </PageTemplate>
  );
};

export default Routes;

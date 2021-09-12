import React from 'react';
import { Route } from 'react-router';

const Routes = (): JSX.Element => {
  return (
    <>
      <Route exact path="/" component={() => <div>hi</div>} />
    </>
  );
};

export default Routes;

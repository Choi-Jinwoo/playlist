import React from 'react';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PlayerPage from './pages/PlayerPage';

const Routes = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/player/:id" component={PlayerPage} />
    </BrowserRouter>
  );
};

export default Routes;

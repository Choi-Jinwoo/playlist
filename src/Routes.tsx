import React from 'react';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PlaylistPage from './pages/PlaylistPage';

const Routes = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/playlist/:id" component={PlaylistPage} />
    </BrowserRouter>
  );
};

export default Routes;

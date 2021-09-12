import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

const App = (): JSX.Element => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default App;

import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import theme from './theme';

const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    font-size: 3rem;
    font-family: Interop, sans-serif;
    background-color: ${theme.color.main3}
  }
`;

export default GlobalStyle;

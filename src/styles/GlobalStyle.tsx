import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import theme from './theme';
import fonts from './fonts';

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${fonts}

  body {
    font-family: Interop, sans-serif;
    background-color: ${theme.color.white2}
  }

  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;

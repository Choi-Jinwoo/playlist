import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import theme from './theme';

const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    font-size: 3rem;
    font-family: Interop, sans-serif;
    background-color: ${theme.color.white2}
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;

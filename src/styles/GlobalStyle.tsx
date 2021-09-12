import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    font-size: 3rem;
    font-family: Interop, sans-serif;
  }
`;

export default GlobalStyle;

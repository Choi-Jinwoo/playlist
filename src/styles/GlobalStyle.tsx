import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import theme from './theme';
import fonts from './fonts';
import { composeMediaQuery } from '../utils/css';

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${fonts}

  html {
    ${composeMediaQuery({ tablet: 'font-size: 14px;', mobile: 'font-size: font-size: 12px;' })}
  }

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

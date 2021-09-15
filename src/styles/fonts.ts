import InteropRegularWoff2 from '../assets/fonts/Interop-Regular.woff2';
import InteropRegularWoff from '../assets/fonts/Interop-Regular.woff';

import InteropMediumWoff2 from '../assets/fonts/Interop-Medium.woff2';
import InteropMediumWoff from '../assets/fonts/Interop-Medium.woff';

import InteropBoldWoff2 from '../assets/fonts/Interop-Bold.woff2';
import InteropBoldWoff from '../assets/fonts/Interop-Bold.woff';

import InteropLightWoff2 from '../assets/fonts/Interop-Light.woff2';
import InteropLightWoff from '../assets/fonts/Interop-Light.woff';

import InteropExtraBoldWoff2 from '../assets/fonts/Interop-ExtraBold.woff2';
import InteropExtraBoldWoff from '../assets/fonts/Interop-ExtraBold.woff';

const fonts = `
  @font-face {
      font-family: 'Interop';
      src: url('${InteropLightWoff2}') format('woff2'),
        url('${InteropLightWoff}') format('woff');
      font-weight: 300;
      font-style: normal;
  }

  @font-face {
    font-family: 'Interop';
    src: url('${InteropRegularWoff2}') format('woff2'),
      url('${InteropRegularWoff}') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Interop';
    src: url('${InteropMediumWoff2}') format('woff2'),
      url('${InteropMediumWoff}') format('woff');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Interop';
    src: url('${InteropBoldWoff2}') format('woff2'),
      url('${InteropBoldWoff}') format('woff');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'Interop';
    src: url('${InteropExtraBoldWoff2}') format('woff2'),
      url('${InteropExtraBoldWoff}') format('woff');
    font-weight: 800;
    font-style: normal;
  }
  }
`;

export default fonts;

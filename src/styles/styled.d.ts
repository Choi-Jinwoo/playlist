import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    deviceWidth: {
    },
    innerWidth: {
      desktop: string;
    },
    color: {
      main1: string;
      main2: string;
      main3: string;
      main4: string;

      black: string;
    },
    fontSize: {
      xxLarge: string;
      xLarge: string;
      large: string;
      medium: string;
      small: string;
      tiny: string;
    },
  }
}

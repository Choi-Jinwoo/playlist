import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    deviceWidth: {
      tablet: string;
      mobile: string;
    },
    innerWidth: {
      desktop: string;
      tablet: string;
      mobile: string;
    },
    color: {
      main1: string;
      main2: string;
      main3: string;
      main4: string;

      black: string;
      white: string;
      white2: string;
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

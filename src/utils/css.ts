import theme from '../styles/theme';

type ComposeMediaQueryArgs = {
  desktop?: string;
  tablet?: string;
  mobile?: string;
}

export const composeMediaQuery = (styles: ComposeMediaQueryArgs): string => {
  const { desktop, tablet, mobile } = styles;

  return `
    @media screen and (min-width: ${theme.deviceWidth.tablet}) {
      ${desktop ?? ''}
    }

    @media screen and (max-width: ${theme.deviceWidth.tablet}) and (min-width: ${theme.deviceWidth.mobile}) {
      ${tablet ?? ''}
    }

    @media screen and (max-width: ${theme.deviceWidth.mobile}) {
      ${mobile ?? ''}
    }
  `;
}
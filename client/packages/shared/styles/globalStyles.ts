import { createGlobalStyle } from 'styled-components';

import { defaultTheme } from './theme';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${defaultTheme.fonts.primary};
    font-weight: ${defaultTheme.fontWeight.medium};
    font-size: ${defaultTheme.fontSizes.m};
    color: ${defaultTheme.colors.darkPrimary};
  }
`;

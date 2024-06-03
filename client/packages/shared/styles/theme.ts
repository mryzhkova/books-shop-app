import { DefaultTheme, css, CSSObject, Interpolation } from 'styled-components';

const fonts = {
    primary: 'Poppins, sans-serif',
    secondary: 'Roboto, sans-serif',
} as const;

const colors = {
    darkPrimary: '#272727',
    lightPrimary: '#E1E1E1',
    darkSecondary: '#A8A8A8',
    lightSecondary: '#F7F8FA',
    accent: '#56B280',
    lightBase: '#FFF',
    darkBase: '#000',
} as const;

const gaps = {
    '3xs': '2px',
    '2xs': '4px',
    xs: '8px',
    s: '12px',
    m: '16px',
    l: '20px',
    xl: '24px',
    '2xl': '32px',
    '3xl': '40px',
    '4xl': '48px',
    '5xl': '64px',
    '6xl': '72px',
    '7xl': '96px',
    '8xl': '128px',
} as const;

const borderRadius = {
    xs: '2px',
    s: '4px',
    m: '8px',
    l: '12px',
    xl: '16px',
    xxl: '20px',
    circle: '50%',
} as const;

const fontSizes = {
    xs: '12px',
    s: '14px',
    m: '16px',
    l: '18px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '26px',
    '4xl': '28px',
    '5xl': '32px',
    '6xl': '40px',
    '7xl': '48px',
} as const;

const fontWeight = {
    light: 300,
    regular: 400,
    medium: 500,
    bold: 600,
} as const;

const breakpoints = {
    sm: '(max-width: 359px)',
    md: '(max-width: 1023px)',
    lg: '(max-width: 1279px)',
    xl: '(max-width: 1439px)',
    xxl: '(min-width: 1440px)',
} as const;

const maxLayoutWidth = 1200;

type Breakpoint = keyof typeof breakpoints;
type Media = {
    [key in Breakpoint]: (
        first: TemplateStringsArray | CSSObject,
        ...interpolations: Interpolation<object>[]
    ) => ReturnType<typeof css>;
};

const media = (Object.keys(breakpoints) as Breakpoint[]).reduce((acc, key) => {
    acc[key] = (first, ...interpolations) => css`
        @media ${breakpoints[key]} {
            ${css(first, ...interpolations)}
        }
    `;
    return acc;
}, {} as Media);

export type Gap = keyof typeof gaps;
export type Color = keyof typeof colors;
export type Font = keyof typeof fonts;
export type FontWeight = keyof typeof fontWeight;
export type FontSize = keyof typeof fontSizes;
export type BorderRadius = keyof typeof borderRadius;

export interface ThemeType {
    fonts: typeof fonts;
    fontSizes: typeof fontSizes;
    fontWeight: typeof fontWeight;
    gaps: typeof gaps;
    borderRadius: typeof borderRadius;
    colors: typeof colors;
    media: Media;
    maxLayoutWidth: number;
}

export const defaultTheme: DefaultTheme = {
    media,
    fonts,
    gaps,
    fontSizes,
    fontWeight,
    borderRadius,
    colors,
    maxLayoutWidth,
};

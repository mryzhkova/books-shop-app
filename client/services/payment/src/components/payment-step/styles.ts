import { defaultTheme } from '@mryzhkova/packages-shared/styles/theme';

export const cardStyle = {
    input: {
        'font-size': `${defaultTheme.fontSizes.s}`,
        'font-family': `${defaultTheme.fonts.secondary}`,
        'font-weight': `${defaultTheme.fontWeight.light}`,
        color: `${defaultTheme.colors.darkPrimary}`,
        padding: `${defaultTheme.gaps.s} ${defaultTheme.gaps.m}`,
        border: `1px solid ${defaultTheme.colors.darkSecondary}`,
        'border-radius': '0px',
        height: '40px',
    },
    ':focus': {
        outline: 'none',
        border: `1px solid ${defaultTheme.colors.accent}`,
        'box-shadow': 'none',
    },
    '.invalid:focus': {
        outline: 'none',
        border: `1px solid ${defaultTheme.colors.error}`,
        color: `${defaultTheme.colors.darkPrimary}`,
        'box-shadow': 'none',
    },
    '.invalid': {
        border: `1px solid ${defaultTheme.colors.error}`,
        color: `${defaultTheme.colors.darkPrimary}`,
        'box-shadow': 'none',
    },
};

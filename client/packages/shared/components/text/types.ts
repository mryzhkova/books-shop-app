import { type ReactNode } from 'react';

import { type Color, type Font, type FontSize, type FontWeight } from '../../styles/theme';

type TextTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
type TextAlign = 'center' | 'left' | 'right';

export type TextProps = {
    children: ReactNode;
    tag?: TextTag;
    view?: Font;
    size?: FontSize;
    weight?: FontWeight;
    color?: Color;
    align?: TextAlign;
};

export type StyledTextProps = Required<Omit<TextProps, 'tag' | 'children'>>;

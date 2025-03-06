import { type ReactNode, type ElementType } from 'react';

import { type Color } from '../../styles/theme';

export type LinkProps = {
    children: ReactNode;
    to: string;
    Component?: ElementType;
    color?: Color;
    underline?: boolean;
    disabled?: boolean;
};

export type StyledLinkProps = Pick<LinkProps, 'underline' | 'color' | 'disabled'>;

import { ReactNode, ElementType } from 'react';

import { Color } from '../../styles/theme';

export type LinkProps = {
    children: ReactNode;
    to: string;
    Component?: ElementType;
    underline?: boolean;
    color?: Color;
};

export type StyledLinkProps = {
    underline?: string;
    color: Color;
};

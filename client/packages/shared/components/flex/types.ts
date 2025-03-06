import { type Property } from 'csstype';
import { type ReactNode } from 'react';

import { type Gap } from '../../styles/theme';

export type FlexProps = {
    children: ReactNode;
    direction?: Property.FlexDirection;
    justify?: Property.JustifyContent;
    align?: Property.AlignItems;
    gap?: Gap;
};

export type StyledFlexProps = Omit<FlexProps, 'children'>;

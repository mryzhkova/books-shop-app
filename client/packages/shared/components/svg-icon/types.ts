import { type FC, type SVGProps } from 'react';

import { type Color } from '../../styles/theme';

export type SVGIconProps = {
    Icon: FC<SVGProps<SVGSVGElement>>;
    color?: Color;
};

export type StyledSVGIconProps = {
    color: Color;
};

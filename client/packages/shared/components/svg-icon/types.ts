import { FC, SVGProps } from 'react';

import { Color } from '../../styles/theme';

export type SVGIconProps = {
    Icon: FC<SVGProps<SVGSVGElement>>;
    color?: Color;
};

export type StyledSVGIconProps = {
    color: Color;
};

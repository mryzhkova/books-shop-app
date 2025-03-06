import { type FC, type SVGProps, type ButtonHTMLAttributes } from 'react';

import { type Color } from '../../styles/theme';

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    Icon: FC<SVGProps<SVGSVGElement>>;
    color?: Color;
    withAddon?: boolean;
}

export type StyledIconButtonProps = Omit<IconButtonProps, 'Icon' | 'color' | 'withAddon'> & {
    addon: string;
};

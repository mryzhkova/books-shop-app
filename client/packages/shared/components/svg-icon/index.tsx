import { StyledIcon } from './styled';
import { type SVGIconProps } from './types';

export const SVGIcon = ({ Icon, color = 'darkPrimary' }: SVGIconProps) => (
    <StyledIcon as={Icon} color={color} />
);

import { StyledIcon } from './styled';
import { SVGIconProps } from './types';

export const SVGIcon = ({ Icon, color = 'darkPrimary' }: SVGIconProps) => (
    <StyledIcon as={Icon} color={color} />
);

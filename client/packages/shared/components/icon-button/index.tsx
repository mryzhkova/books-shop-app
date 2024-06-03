import { SVGIcon } from '../svg-icon';

import { StyledIconButton } from './styled';
import { IconButtonProps } from './types';

export const IconButton = ({ Icon, color, withAddon, onClick }: IconButtonProps) => (
    <StyledIconButton onClick={onClick} addon={withAddon ? withAddon.toString() : ''}>
        <SVGIcon Icon={Icon} color={color} />
    </StyledIconButton>
);

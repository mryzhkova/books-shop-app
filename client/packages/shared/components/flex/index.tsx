import { StyledFlex } from './styled';
import { type FlexProps } from './types';

export const Flex = ({ children, ...props }: FlexProps) => (
    <StyledFlex {...props}>{children}</StyledFlex>
);

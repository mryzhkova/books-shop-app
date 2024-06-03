import { StyledLink } from './styled';
import { LinkProps } from './types';

export const Link = ({
    children,
    underline,
    to,
    Component = 'a',
    color = 'darkPrimary',
}: LinkProps) => (
    <StyledLink
        as={Component}
        {...{ [typeof Component === 'string' ? 'href' : 'to']: to }}
        underline={underline ? 'underline' : 'none'}
        color={color}
    >
        {children}
    </StyledLink>
);

import { StyledLink } from './styled';
import { type LinkProps } from './types';

export const Link = ({
    children,
    underline,
    to,
    Component = 'a',
    color = 'darkPrimary',
    disabled,
}: LinkProps) => (
    <StyledLink
        as={Component}
        disabled={disabled}
        {...{ [typeof Component === 'string' ? 'href' : 'to']: to }}
        underline={underline}
        color={color}
    >
        {children}
    </StyledLink>
);

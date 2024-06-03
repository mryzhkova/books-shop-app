import styled, { css } from 'styled-components';

import { StyledLinkProps } from './types';

export const StyledLink = styled.a<StyledLinkProps>`
    ${({ underline, color, theme }) => css`
        text-decoration: ${underline};
        color: ${theme.colors[color]};
    `}

    &:hover {
        opacity: 0.8;
    }
`;

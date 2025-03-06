import styled, { css } from 'styled-components';

import { type StyledLinkProps } from './types';

export const StyledLink = styled.a<StyledLinkProps>`
    ${({ underline, color, theme }) => css`
        text-decoration: ${underline ? 'underline' : 'none'};
        color: ${color && theme.colors[color]};
    `}

    ${({ disabled }) => {
        if (disabled) {
            return css`
                cursor: not-allowed;
                opacity: 0.7;
            `;
        }

        return css`
            &:hover {
                opacity: 0.7;
            }
        `;
    }}
`;

import styled, { css } from 'styled-components';

import { StyledTextProps } from './types';

export const StyledText = styled.span<StyledTextProps>`
    ${({ color, theme, view, size, weight, align }) => css`
        color: ${theme.colors[color]};
        font-family: ${theme.fonts[view]};
        font-weight: ${theme.fontWeight[weight]};
        font-size: ${theme.fontSizes[size]};
        text-align: ${align};
    `}
`;

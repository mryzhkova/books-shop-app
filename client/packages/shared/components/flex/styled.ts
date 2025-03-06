import styled, { css } from 'styled-components';

import { type StyledFlexProps } from './types';

export const StyledFlex = styled.div<StyledFlexProps>`
    display: flex;

    ${({ theme, gap, direction, justify, align }) => css`
        flex-direction: ${direction};
        justify-content: ${justify};
        align-items: ${align};

        & > *:not(:last-child) {
            margin-right: ${gap && theme.gaps[gap]};
        }
    `}
`;

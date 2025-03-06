import styled from 'styled-components';

import { type StyledSVGIconProps } from './types';

export const StyledIcon = styled.svg<StyledSVGIconProps>`
    & path {
        fill: ${({ theme, color }) => theme.colors[color]};
    }
`;

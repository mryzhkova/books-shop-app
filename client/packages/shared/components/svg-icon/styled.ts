import styled from 'styled-components';

import { StyledSVGIconProps } from './types';

export const StyledIcon = styled.svg<StyledSVGIconProps>`
    & path {
        fill: ${({ theme, color }) => theme.colors[color]};
    }
`;

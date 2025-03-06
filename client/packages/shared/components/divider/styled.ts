import styled from 'styled-components';

import { type DividerProps } from './types';

export const StyledDivider = styled.div<DividerProps>`
    width: 100%;
    height: 1px;
    opacity: 0.5;
    background-color: ${({ theme, color }) =>
        color ? theme.colors[color] : theme.colors.darkSecondary};
`;

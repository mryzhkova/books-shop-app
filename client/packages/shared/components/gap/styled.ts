import styled from 'styled-components';

import { StyledGapProps } from './types';

export const HorizontalGap = styled.span<StyledGapProps>`
    display: inline-block;
    width: ${({ size, theme }) => theme.gaps[size]};
`;

export const VerticalGap = styled.div<StyledGapProps>`
    height: ${({ size, theme }) => theme.gaps[size]};
`;

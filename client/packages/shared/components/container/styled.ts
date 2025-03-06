import styled from 'styled-components';

import { type ContainerProps } from './types';

export const StyledContainer = styled.div<ContainerProps>`
    margin: 0 auto;
    width: ${({ width }) => (width ? `${width}px` : 'auto')};
    max-width: ${({ theme, maxWidth }) => `${maxWidth || theme.maxLayoutWidth}px`};

    ${({ theme }) => theme.media.md`
        background: none;
        width: 96vw;
        max-width: 445px;
    `};
`;

import styled, { css } from 'styled-components';

export const StyledCart = styled.div`
    ${({ theme }) => css`
        margin: 0 auto;
        max-width: ${`${theme.maxLayoutWidth}px`};
    `}

    ${({ theme }) => theme.media.xl`
        padding: 0 ${theme.gaps.xs};
    `};
`;

import styled, { css } from 'styled-components';

export const ListWrapper = styled.div`
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    ${({ theme }) => css`
        max-width: ${`${theme.maxLayoutWidth}px`};
        gap: ${theme.gaps['3xl']};
    `};
`;

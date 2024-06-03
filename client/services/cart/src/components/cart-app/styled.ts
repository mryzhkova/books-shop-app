import styled, { css } from 'styled-components';

export const StyledCart = styled.div`
    ${({ theme }) => css`
        margin: 0 auto;
        max-width: ${`${theme.maxLayoutWidth}px`};
    `}
`;

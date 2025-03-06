import styled, { css } from 'styled-components';

export const StyledCardItem = styled.div`
    display: grid;
    grid-template-columns: 60px 1fr 40px;
    ${({ theme }) => css`
        padding: ${theme.gaps.l} 0;
    `}
`;

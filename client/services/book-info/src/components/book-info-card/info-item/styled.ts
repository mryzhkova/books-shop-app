import styled, { css } from 'styled-components';

export const StyledInfoItem = styled.div`
    display: grid;
    grid-template-columns: 200px 1fr;

    ${({ theme }) => css`
        margin-bottom: ${theme.gaps.s};
    `}
`;

import styled, { css } from 'styled-components';

export const StyledDescription = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 650px;

    ${({ theme }) => css`
        padding-right: ${theme.gaps.s};
        margin: ${theme.gaps['5xl']} 0;
    `}
`;

export const StyledCoverBy = styled.div`
    display: grid;
    grid-template-columns: 45px 1fr;
    align-items: center;
    margin: ${({ theme }) => theme.gaps.m} 0;
`;

export const StyledCoverByText = styled.div`
    display: flex;
    flex-direction: column;
`;

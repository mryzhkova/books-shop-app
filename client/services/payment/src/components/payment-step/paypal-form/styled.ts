import styled, { css } from 'styled-components';

export const StyledPaymentCard = styled.div`
    ${({ theme }) => css`
        border-radius: ${theme.borderRadius.m};
        border: 1px solid ${theme.colors.lightPrimary};
    `}
`;

export const StyledCardHeader = styled.div`
    display: flex;
    align-items: center;

    ${({ theme }) => css`
        padding: ${theme.gaps.s} ${theme.gaps.l};
        border-radius: 7px 7px 0 0;
        background: linear-gradient(to right, #56b28033 20%, #56b28066 40%);
    `}
`;

export const StyledPaymentCardBody = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(3, auto);

    & > :nth-child(1),
    & > :nth-child(2) {
        grid-column: span 2;
    }

    & > :nth-child(3),
    & > :nth-child(4) {
        grid-column: span 1;
    }

    ${({ theme }) => css`
        padding: ${theme.gaps.l};
    `}
`;

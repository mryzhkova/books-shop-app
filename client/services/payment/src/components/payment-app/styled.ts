import styled, { css } from 'styled-components';

export const StyledBackground = styled.div`
    min-height: 100vh;
    width: 100%;

    ${({ theme }) => css`
        background: linear-gradient(
            to right,
            ${theme.colors.lightBase} 50%,
            ${theme.colors.lightPrimary} 50%
        );
    `}

    ${({ theme }) => theme.media.md`
        background: none;
    `};
`;

export const StyledPaymentApp = styled.div`
    display: flex;
    justify-content: space-between;

    & > *:first-child {
        margin-left: ${({ theme }) => theme.gaps['3xs']};
    }

    ${({ theme }) => theme.media.md`
        flex-direction: column-reverse;
        justify-content: flex-start;
    `};
`;

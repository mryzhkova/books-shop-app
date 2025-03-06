import styled, { css } from 'styled-components';

export const StyledCartItem = styled.div`
    display: grid;
    grid-template-columns: 1fr 160px 160px 160px;
    margin: ${({ theme }) => theme.gaps.m} 0;

    ${({ theme }) => theme.media.xl`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        row-gap: ${theme.gaps.l};
    `};
`;

export const StyledProductImage = styled.img`
    width: 141px;
    height: 171px;
`;

export const StyledCounter = styled.div`
    display: flex;
    align-items: center;
    width: 80px;

    ${({ theme }) => css`
        border: 1px solid ${theme.colors.accent};
        padding: ${theme.gaps['3xs']} ${theme.gaps['2xs']};
    `}
`;

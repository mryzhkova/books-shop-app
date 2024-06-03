import styled, { css } from 'styled-components';

export const StyledCartItem = styled.div`
    display: grid;
    grid-template-columns: 1fr 160px 160px 160px;

    ${({ theme }) => css`
        margin: ${theme.gaps.m} 0;
    `}
`;

export const ProductCell = styled.div`
    display: flex;
`;

export const ProductImage = styled.img`
    width: 141px;
    height: 171px;
`;

export const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    ${({ theme }) => css`
        margin: ${theme.gaps['2xl']} ${theme.gaps['4xl']};
    `}
`;

export const PriceCell = styled.div`
    display: flex;
    align-items: center;
`;

export const TotalCell = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const CountCell = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
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

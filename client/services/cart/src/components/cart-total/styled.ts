import styled from 'styled-components';

export const StyledCartFooter = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;

    ${({ theme }) => theme.media.xl`
        flex-direction: column;
    `};
`;

export const StyledSubTotal = styled.div`
    display: flex;
    justify-content: flex-end;

    ${({ theme }) => theme.media.xl`
        justify-content: flex-start;
    `};
`;

export const StyledFooterContent = styled.div`
    ${({ theme }) => theme.media.xl`
        margin-bottom: ${theme.gaps.xl};
    `};
`;

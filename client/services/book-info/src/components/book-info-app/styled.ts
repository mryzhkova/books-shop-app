import styled from 'styled-components';

export const StyledBookInfo = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-top: ${({ theme }) => theme.gaps['4xl']};
    padding: 0 ${({ theme }) => theme.gaps['3xl']};
`;

export const StyledImage = styled.div`
    ${({ theme }) => theme.media.xl`
        display: none;
    `};
`;

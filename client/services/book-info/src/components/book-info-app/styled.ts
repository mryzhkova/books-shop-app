import styled from 'styled-components';

export const BookInfoWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding: 0 ${({ theme }) => theme.gaps['3xl']};
`;

export const StyledImage = styled.div`
    ${({ theme }) => theme.media.xl`
        display: none;
    `};
`;

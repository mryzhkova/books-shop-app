import styled from 'styled-components';

export const StyledAdressForm = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(4, auto);
    gap: ${({ theme }) => theme.gaps.s};
    margin: ${({ theme }) => theme.gaps.s} 0;

    & > :nth-child(1) {
        grid-column: 1 / 4;
    }
    & > :nth-child(2) {
        grid-column: 4 / 7;
    }
    & > :nth-child(3),
    & > :nth-child(4),
    & > :nth-child(8) {
        grid-column: 1 / 7;
    }
    & > :nth-child(5) {
        grid-column: 1 / 3;
    }
    & > :nth-child(6) {
        grid-column: 3 / 5;
    }
    & > :nth-child(7) {
        grid-column: 5 / 7;
    }

    ${({ theme }) => theme.media.md`
        display: flex;
        flex-direction: column;
    `};
`;

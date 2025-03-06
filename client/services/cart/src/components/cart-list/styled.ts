import styled from 'styled-components';

export const StyledListHeader = styled.div`
    display: grid;
    grid-template-columns: 1fr 160px 160px 160px;

    ${({ theme }) => theme.media.xl`
        display: none;
    `};
`;

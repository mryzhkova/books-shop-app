import styled from 'styled-components';

export const StyledStepsNavigation = styled.div`
    ${({ theme }) => theme.media.md`
        display: none;
    `};
`;

import styled from 'styled-components';

export const StyledBanner = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: flex-end;
`;

export const StyledLeftBanner = styled.div`
    ${({ theme }) => theme.media.lg`
        display: none;
    `}
`;

export const StyledRightBanner = styled.div`
    ${({ theme }) => theme.media.lg`
        max-width: 575px;
        img {
            width: 100%;
        }
    `}
`;

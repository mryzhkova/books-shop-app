import styled from 'styled-components';

export const BannerWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: flex-end;
`;

export const LeftBanner = styled.div`
    ${({ theme }) => theme.media.lg`
        display: none;
    `}
`;

export const RightBanner = styled.div`
    ${({ theme }) => theme.media.lg`
        max-width: 575px;
        img {
            width: 100%;
        }
    `}
`;

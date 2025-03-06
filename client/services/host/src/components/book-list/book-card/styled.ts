import styled, { css } from 'styled-components';

export const StyledCard = styled.div`
    height: 230px;
    width: 255px;
    background-color: ${({ theme }) => theme.colors.lightSecondary};
    box-shadow: 0px 4px 24px 0px rgba(123, 123, 123, 0.15);
    position: relative;
`;

export const StyledCardImage = styled.div`
    position: absolute;
    top: 15px;
    left: 70px;
    z-index: 1;
`;

export const StyledCardInfo = styled.div`
    position: absolute;
    bottom: 0;
    height: 81px;
    width: 100%;
    ${({ theme }) => css`
        background-color: ${theme.colors.lightBase};
        padding: ${theme.gaps.m} ${theme.gaps.m};
    `};
`;

export const StyledLinkText = styled.div`
    position: relative;
`;

export const StyledIcon = styled.div`
    position: absolute;
    top: 16px;
    left: -6px;
`;

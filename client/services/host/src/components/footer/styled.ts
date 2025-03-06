import styled, { css } from 'styled-components';

export const StyledFooterBackground = styled.div`
    background-color: ${({ theme }) => theme.colors.darkPrimary};
`;

export const StyledFooter = styled.div`
    margin: 0 auto;
    height: 380px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${({ theme }) => css`
        max-width: ${`${theme.maxLayoutWidth}px`};
        padding: 0 ${theme.gaps.m};
    `};

    ${({ theme }) => theme.media.md`
        justify-content: center;
        flex-direction: column;
        height: auto;
        padding-top: ${theme.gaps.m};
    `};
`;

export const StyledLinks = styled.div`
    display: flex;

    ${({ theme }) => theme.media.md`
        flex-direction: column;
        align-items: center;
        margin: ${theme.gaps.m} 0;
    `};
`;

export const StyledLinkItem = styled.div`
    ${({ theme }) => theme.media.md`
        display: none;
    `};
`;

export const StyledLinksGroup = styled.div`
    display: flex;
    flex-direction: column;

    &:not(:last-child) {
        margin-right: ${({ theme }) => theme.gaps['5xl']};

        ${({ theme }) => theme.media.md`
            margin-right: 0;
        `};
    }

    ${({ theme }) => theme.media.md`
        margin: ${theme.gaps.m} 0;
    `};
`;

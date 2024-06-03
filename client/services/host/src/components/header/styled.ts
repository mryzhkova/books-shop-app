import styled, { css } from 'styled-components';

export const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${({ theme }) => css`
        padding: 0 ${theme.gaps.m};
        margin: ${theme.gaps.l} auto;
        max-width: ${`${theme.maxLayoutWidth}px`};
    `}
`;

export const NavWrapper = styled.nav`
    display: flex;

    ${({ theme }) => theme.media.md`
        display: none;
    `};
`;

export const HeaderLine = styled.div`
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.accent};
    opacity: 0.5;
`;

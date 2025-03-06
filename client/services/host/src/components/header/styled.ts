import styled, { css } from 'styled-components';

export const StyledHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${({ theme }) => css`
        padding: 0 ${theme.gaps.m};
        margin: ${theme.gaps.l} auto;
        max-width: ${`${theme.maxLayoutWidth}px`};
    `}
`;

export const StyledNav = styled.nav`
    display: flex;

    ${({ theme }) => theme.media.md`
        display: none;
    `};
`;

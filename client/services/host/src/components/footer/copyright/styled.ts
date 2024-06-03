import styled, { css } from 'styled-components';

export const CopyrightBackground = styled.div`
    background-color: ${({ theme }) => theme.colors.lightSecondary};
`;

export const CopyrightContent = styled.div`
    margin: 0 auto;
    ${({ theme }) => css`
        max-width: ${`${theme.maxLayoutWidth}px`};
        padding: ${theme.gaps.l} ${theme.gaps.m};
    `};
`;

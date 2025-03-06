import styled, { css } from 'styled-components';

import { type RadioProps } from './types';

export const StyledRadioLabel = styled.label<{ border?: boolean }>`
    display: grid;
    grid-template-columns: 30px 1fr 100px;
    align-items: center;
    justify-items: start;
    cursor: pointer;

    ${({ theme }) => css`
        font-family: ${theme.fonts.secondary};
        font-weight: ${theme.fontWeight.regular};
        font-size: ${theme.fontSizes.s};
        padding: ${theme.gaps.m} ${theme.gaps.l};
    `}

    ${({ theme, border }) =>
        border &&
        css`
            border: 1px solid ${theme.colors.lightPrimary};
            border-radius: ${theme.borderRadius.m};
            padding: ${theme.gaps.m} ${theme.gaps.l};
        `}
`;

export const StyledRadioInput = styled.input<RadioProps>`
    display: none;
`;

export const StyledRadio = styled.span`
    justify-self: start;
    width: 16px;
    height: 16px;

    ${({ theme }) => css`
        border: 3px solid ${theme.colors.lightPrimary};
        border-radius: ${theme.borderRadius.circle};
        margin-right: ${theme.gaps.s};

        ${StyledRadioInput}:checked + & {
            background-color: ${theme.colors.accent};
        }
    `}
`;

export const StyledAddon = styled.span`
    justify-self: end;

    ${({ theme }) => css`
        font-size: ${theme.fontSizes.s};
        font-weight: ${theme.fontWeight.bold};
    `}
`;

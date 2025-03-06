import styled, { css } from 'styled-components';

import { type InputProps } from './types';

export const StyledError = styled.span`
    ${({ theme }) => css`
        color: ${theme.colors.error};
        font-family: ${theme.fonts.secondary};
        font-weight: ${theme.fontWeight.regular};
        font-size: ${theme.fontSizes.xs};
    `}
`;

export const StyledInput = styled.input<InputProps>`
    height: 40px;

    ${({ theme, error }) => css`
        font-family: ${theme.fonts.secondary};
        font-weight: ${theme.fontWeight.regular};
        font-size: ${theme.fontSizes.s};
        padding: ${theme.gaps.s} ${theme.gaps.m};
        border: 1px solid ${error ? theme.colors.error : theme.colors.darkSecondary};
    `}

    ${({ size }) => {
        switch (size) {
            case 'xl':
                return css`
                    width: 445px;

                    ${({ theme }) => theme.media.md`
                        width: 100%;
                    `};
                `;
            case 'l':
                return css`
                    width: 310px;

                    ${({ theme }) => theme.media.md`
                        width: auto;
                    `};
                `;
            case 'm':
                return css`
                    width: 216px;

                    ${({ theme }) => theme.media.md`
                        width: 100%;
                    `};
                `;
            case 's':
                return css`
                    width: 140px;

                    ${({ theme }) => theme.media.md`
                        width: 100%;
                    `};
                `;
            case 'block':
                return css`
                    width: 100%;
                `;
            default:
                return css`
                    width: auto;

                    ${({ theme }) => theme.media.md`
                        width: 100%;
                    `};
                `;
        }
    }};

    &:focus {
        ${({ theme, error }) => css`
            outline: none;
            border: 2px solid ${error ? theme.colors.error : theme.colors.accent};
        `}
    }

    &::placeholder {
        ${({ theme }) => css`
            outline: none;
            color: ${theme.colors.darkPrimary};
            font-weight: ${theme.fontWeight.light};
        `}
    }
`;

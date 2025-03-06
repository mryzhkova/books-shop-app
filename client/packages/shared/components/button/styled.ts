import styled, { css } from 'styled-components';

import { type StyledButtonProps } from './types';

export const StyledButton = styled.button<StyledButtonProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: none;
    cursor: pointer;

    ${({ theme, block }) => css`
        color: ${theme.colors.lightBase};
        font-family: ${theme.fonts.secondary};
        font-size: ${theme.fontSizes.xl};
        font-weight: ${theme.fontWeight.regular};
        border-radius: ${theme.borderRadius.s};
        width: ${block ? '100%' : 'auto'};
    `};

    ${({ view, theme }) => {
        switch (view) {
            case 'gray':
                return css`
                    font-weight: ${theme.fontWeight.light};
                    font-size: ${theme.fontSizes.l};
                    background-color: ${theme.colors.darkSecondary};
                    padding: ${theme.gaps.xs} ${theme.gaps.xl};
                `;
            case 'text-primary':
                return css`
                    color: ${theme.colors.darkBase};
                    font-size: ${theme.fontSizes.m};
                    font-weight: ${theme.fontWeight.medium};
                `;
            case 'text-secondary':
                return css`
                    color: ${theme.colors.darkPrimary};
                    font-size: ${theme.fontSizes.m};
                    font-weight: ${theme.fontWeight.medium};
                `;
            case 'text-default':
                return css`
                    color: ${theme.colors.accent};
                    font-size: ${theme.fontSizes.m};
                    font-weight: ${theme.fontWeight.medium};
                `;
            case 'link':
                return css`
                    color: ${theme.colors.accent};
                    font-size: ${theme.fontSizes.l};
                    text-decoration: underline;
                `;
            case 'accent-light':
                return css`
                    font-weight: ${theme.fontWeight.light};
                    background-color: ${theme.colors.accent};
                    padding: ${theme.gaps.xs} ${theme.gaps['4xl']};
                `;
            case 'accent-text':
                return css`
                    color: ${theme.colors.accent};
                    font-size: ${theme.fontSizes.l};
                `;
            case 'accent':
            default:
                return css`
                    background-color: ${theme.colors.accent};
                    padding: ${theme.gaps.xs} ${theme.gaps['4xl']};
                `;
        }
    }};

    ${({ disabled }) => {
        if (disabled) {
            return css`
                opacity: 0.8;
                cursor: auto;
            `;
        }

        return css`
            &:hover {
                opacity: 0.8;
            }
        `;
    }}
`;

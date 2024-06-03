import styled, { css } from 'styled-components';

import { StyledButtonProps } from './types';

export const StyledButton = styled.button<StyledButtonProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    ${({ theme, width }) => css`
        color: ${theme.colors.lightBase};
        font-family: ${theme.fonts.secondary};
        font-size: ${theme.fontSizes.xl};
        font-weight: ${theme.fontWeight.regular};
        padding: ${theme.gaps.xs} ${theme.gaps['4xl']};
        border-radius: ${theme.borderRadius.s};
        border: none;
        width: ${width};
    `};

    ${({ view, theme }) => {
        switch (view) {
            case 'gray':
                return css`
                    background-color: ${theme.colors.darkSecondary};
                `;
            case 'ghost':
                return css`
                    display: inline-block;
                    background: none;
                    color: ${theme.colors.accent};
                    padding: 0;
                `;
            case 'light':
                return css`
                    background-color: ${theme.colors.accent};
                    font-weight: ${theme.fontWeight.light};
                `;
            case 'accent':
            default:
                return css`
                    background-color: ${theme.colors.accent};
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
    }};
`;

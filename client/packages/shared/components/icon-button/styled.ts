import styled, { css } from 'styled-components';

import { StyledIconButtonProps } from './types';

export const StyledIconButton = styled.button<StyledIconButtonProps>`
    border: none;
    background: none;
    cursor: pointer;
    position: relative;

    &:hover {
        opacity: 0.8;
    }

    ${({ addon, theme }) => {
        if (addon) {
            return css`
                &::before {
                    content: '';
                    width: 11px;
                    height: 11px;
                    display: block;
                    position: absolute;
                    right: -5px;
                    top: -5px;
                    border-radius: ${theme.borderRadius.circle};
                    background-color: ${theme.colors.accent};
                }
            `;
        }
        return '';
    }};
`;

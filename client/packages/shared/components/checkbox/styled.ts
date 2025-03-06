import styled, { css } from 'styled-components';

import { type CheckboxProps } from './types';

export const StyledCheckbox = styled.input<CheckboxProps>`
    appearance: none;
    width: 16px;
    height: 16px;
    position: relative;
    cursor: pointer;

    ${({ theme }) => css`
        margin-right: ${theme.gaps.xs};
        border: 1px solid ${theme.colors.darkSecondary};
        border-radius: 0px;
    `}

    &:checked {
        ${({ theme }) => css`
            background-color: ${theme.colors.accent};
            border-color: ${theme.colors.accent};
        `}
    }

    &:checked::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 4px;
        height: 8px;
        border: solid white;
        border-width: 0 2px 2px 0;
        transform: translate(-50%, -50%) rotate(45deg);
    }
`;

export const StyledLabel = styled.label`
    display: inline-flex;
    align-items: flex-start;

    ${({ theme }) => css`
        font-weight: ${theme.fontWeight.light};
        font-size: ${theme.fontSizes.s};
    `}
`;

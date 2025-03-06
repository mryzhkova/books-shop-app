import styled, { css } from 'styled-components';

export const StyledSelectWrapper = styled.div`
    position: relative;
    width: 100%;
`;

export const StyledChevron = styled.span<{ open: boolean }>`
    margin-right: ${({ theme }) => theme.gaps.m};

    & svg {
        transform: ${({ open }) => (open ? 'rotate(180deg)' : 'rotate(0)')};
        transition: transform 0.3s ease-out;
    }

    &::before {
        content: '';
        ${({ theme }) => css`
            margin-right: ${theme.gaps.m};
            border-left: 1px solid ${theme.colors.darkSecondary};
        `}
    }
`;

export const StyledSelectButton = styled.button<{ error?: string }>`
    position: relative;
    width: 100%;
    height: 40px;
    background: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1;
    cursor: pointer;

    ${({ theme, error }) => css`
        padding-left: ${theme.gaps.m};
        border: 1px solid ${error ? theme.colors.error : theme.colors.darkSecondary};
    `}
`;

export const StyledLabel = styled.span<{ top: boolean }>`
    position: absolute;
    transition: all 0.3s ease;

    ${({ theme, top }) => css`
        left: ${theme.gaps.m};
        top: ${top ? '6px' : '12px'};
        font-size: ${top ? theme.fontSizes['2xs'] : theme.fontSizes.s};
        font-weight: ${theme.fontWeight.light};
        font-family: ${theme.fonts.secondary};
    `}
`;

export const StyledDropdown = styled.ul`
    position: absolute;
    z-index: 1;
    width: 100%;
    max-height: 200px;
    overflow-y: auto;
    margin: 0;
    padding: 0;
    list-style: none;

    ${({ theme }) => css`
        font-size: ${theme.fontSizes.m};
        font-weight: ${theme.fontWeight.medium};
        font-family: ${theme.fonts.secondary};
        background: ${theme.colors.lightBase};
        border: 1px solid ${theme.colors.darkSecondary};
        border-top: none;
    `}
`;

export const StyledOption = styled.li`
    position: relative;
    height: 40px;
    display: flex;
    align-items: center;
    cursor: pointer;

    ${({ theme }) => css`
        padding: 0 ${theme.gaps.xs};
        font-size: ${theme.fontSizes.m};
        font-weight: ${theme.fontWeight.medium};
        font-family: ${theme.fonts.secondary};
    `}

    &:not(:last-child) {
        border-bottom: 1px solid ${({ theme }) => theme.colors.lightPrimary};
    }

    &:hover {
        background-color: ${({ theme }) => theme.colors.lightSecondary};
    }
`;

export const StyledPplaceholder = styled.span<{ open: boolean }>`
    ${({ open, theme }) => {
        if (open) {
            return css`
                font-size: ${theme.fontSizes.s};
                font-family: ${theme.fonts.secondary};
                font-weight: ${theme.fontWeight.light};
                margin-top: ${theme.gaps.xs};
            `;
        }
        return css`
            visibility: hidden;
        `;
    }}
`;

export const StyledValue = styled.span`
    ${({ theme }) => css`
        margin-top: ${theme.gaps.xs};
        font-size: ${theme.fontSizes.s};
        font-weight: ${theme.fontWeight.medium};
        font-family: ${theme.fonts.secondary};
    `}
`;

export const StyledSelectError = styled.span`
    ${({ theme }) => css`
        color: ${theme.colors.error};
        font-family: ${theme.fonts.secondary};
        font-weight: ${theme.fontWeight.regular};
        font-size: ${theme.fontSizes.xs};
    `}
`;

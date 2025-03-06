import styled, { css } from 'styled-components';

export const StyledRadioGroup = styled.div`
    ${({ theme }) => css`
        border-radius: ${theme.borderRadius.m};
        border: 1px solid ${theme.colors.lightPrimary};

        & > *:not(:last-child) {
            position: relative;
        }

        & > *:not(:last-child)::after {
            content: '';
            position: absolute;
            background-color: ${theme.colors.lightPrimary};
            width: 92%;
            height: 1px;
            margin-top: 48px;
            left: 4%;
        }
    `}
`;

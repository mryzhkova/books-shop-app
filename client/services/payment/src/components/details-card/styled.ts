import styled, { css } from 'styled-components';

export const StyledDetailsCard = styled.div`
    ${({ theme }) => css`
        border: 1px solid ${theme.colors.accent};
        border-radius: ${theme.borderRadius.m};
        padding: 0 ${theme.gaps.xl};
    `}
`;

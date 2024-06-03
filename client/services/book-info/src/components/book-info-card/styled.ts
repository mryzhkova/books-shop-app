import styled, { css } from 'styled-components';

export const StyledBookInfoCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    ${({ theme }) => css`
        padding: ${theme.gaps['4xl']};
        background-color: ${theme.colors.lightSecondary};
        width: 570px;
    `}
`;

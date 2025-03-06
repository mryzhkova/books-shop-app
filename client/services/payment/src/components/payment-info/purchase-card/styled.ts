import styled, { css } from 'styled-components';

export const StyledPurchaseCard = styled.div`
	display: flex;
`;

export const StyledPurchaseInfo = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: ${({ theme }) => theme.gaps['5xl']};

	${({ theme }) => theme.media.md`
        margin-left: ${theme.gaps.l};
    `};
`;

export const StyledPurchaseCover = styled.div`
	position: relative;
`;

export const StyledPurchaseCount = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	top: -20px;
	right: -20px;
	width: 22px;
	height: 22px;

	${({ theme }) => css`
		border-radius: ${theme.borderRadius.circle};
		background-color: ${theme.colors.accent};
	`}
`;

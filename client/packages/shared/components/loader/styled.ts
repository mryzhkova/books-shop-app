import { styled } from 'styled-components';

export const StyledLoader = styled.span`
    width: 70px;
    height: 70px;
    border: 6px solid ${({ theme }) => theme.colors.accent};
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    animation: rotation 1s linear infinite;

    @keyframes rotation {
        0% {
            transform: rotate(0deg);
        }

        100% {
            transform: rotate(360deg);
        }
    }
`;

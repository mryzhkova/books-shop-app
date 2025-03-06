import { StyledButton } from './styled';
import { type ButtonProps } from './types';

export const Button = ({ children, view, block, ...props }: ButtonProps) => (
    <StyledButton view={view} block={block} {...props}>
        {children}
    </StyledButton>
);

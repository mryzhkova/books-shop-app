import { StyledButton } from './styled';
import { ButtonProps } from './types';

export const Button = ({ children, view, block, ...props }: ButtonProps) => (
    <StyledButton view={view} width={block ? '100%' : 'auto'} {...props}>
        {children}
    </StyledButton>
);

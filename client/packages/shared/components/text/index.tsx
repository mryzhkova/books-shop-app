import { StyledText } from './styled';
import { TextProps } from './types';

export const Text = ({
    children,
    view = 'primary',
    size = 'm',
    weight = 'medium',
    color = 'darkPrimary',
    align = 'left',
    tag = 'span',
}: TextProps) => (
    <StyledText as={tag} view={view} size={size} weight={weight} color={color} align={align}>
        {children}
    </StyledText>
);

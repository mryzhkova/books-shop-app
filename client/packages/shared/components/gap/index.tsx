import { HorizontalGap, VerticalGap } from './styled';
import { type GapProps } from './types';

export const Gap = ({ size, direction = 'vertical' }: GapProps) => {
    const Component = direction === 'vertical' ? VerticalGap : HorizontalGap;

    return <Component size={size} />;
};

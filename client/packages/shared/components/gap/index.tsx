import { HorizontalGap, VerticalGap } from './styled';
import { GapProps } from './types';

export const Gap = ({ size, direction = 'vertical' }: GapProps) => {
    const Component = direction === 'vertical' ? VerticalGap : HorizontalGap;

    return <Component size={size} />;
};

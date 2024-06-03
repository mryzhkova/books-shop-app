import { Text } from '@mryzhkova/packages-shared/components/text';

import { StyledInfoItem } from './styled';

type Props = {
    title: string;
    value: string;
};

export const InfoItem = ({ title, value }: Props) => (
    <StyledInfoItem>
        <Text color='darkSecondary' weight='light'>
            {title}
        </Text>
        <Text weight='light'>{value}</Text>
    </StyledInfoItem>
);

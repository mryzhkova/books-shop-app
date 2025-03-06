import { Button } from '@mryzhkova/packages-shared/components/button';
import { Text } from '@mryzhkova/packages-shared/components/text';

import { StyledCardItem } from './styled';

type Props = {
    title: string;
    description: string;
    onEditClick: () => void;
};

export const DetailsCardItem = ({ title, description, onEditClick }: Props) => (
    <StyledCardItem>
        <Text view='secondary' size='s' weight='regular' color='darkSecondary'>
            {title}
        </Text>
        <Text view='secondary' size='s' weight='regular'>
            {description}
        </Text>
        <Button view='accent-text' onClick={onEditClick}>
            <Text view='secondary' size='m' weight='regular' color='accent'>
                Edit
            </Text>
        </Button>
    </StyledCardItem>
);

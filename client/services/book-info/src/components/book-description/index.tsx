import { Gap } from '@mryzhkova/packages-shared/components/gap';
import { Text } from '@mryzhkova/packages-shared/components/text';

import CoverByIcon from '@/assets/avatar.svg';

import { StyledCoverByText, StyledCoverBy, StyledDescription } from './styled';

type Props = {
    title: string;
    author: string;
    coverBy: string;
    coverByEmail: string;
    description: string;
};

export const BookDescription = ({ title, author, coverBy, coverByEmail, description }: Props) => (
    <StyledDescription>
        <Text weight='regular'>{author}</Text>
        <Text weight='bold' size='7xl'>
            {title}
        </Text>
        <StyledCoverBy>
            <CoverByIcon />
            <StyledCoverByText>
                <Text size='s'>{coverBy}</Text>
                <Text weight='light' size='xs'>
                    {coverByEmail}
                </Text>
            </StyledCoverByText>
        </StyledCoverBy>
        <Gap size='l' />
        <Text weight='light' tag='p'>
            {description}
        </Text>
    </StyledDescription>
);

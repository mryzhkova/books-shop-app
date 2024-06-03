import { Gap } from '@mryzhkova/packages-shared/components/gap';
import { Text } from '@mryzhkova/packages-shared/components/text';
import { Book } from '@mryzhkova/packages-shared/types';

import CoverByIcon from '@/assets/avatar.svg';

import { CoverByText, StyledCoverBy, StyledDescription } from './styled';

type Props = Pick<Book, 'author' | 'title' | 'coverBy' | 'coverByEmail' | 'description'>;

export const BookDescription = ({ title, author, coverBy, coverByEmail, description }: Props) => (
    <StyledDescription>
        <Text weight='regular'>{author}</Text>
        <Text weight='bold' size='7xl'>
            {title}
        </Text>
        <StyledCoverBy>
            <CoverByIcon />
            <CoverByText>
                <Text size='s'>{coverBy}</Text>
                <Text weight='light' size='xs'>
                    {coverByEmail}
                </Text>
            </CoverByText>
        </StyledCoverBy>
        <Gap size='l' />
        <Text weight='light' tag='p'>
            {description}
        </Text>
    </StyledDescription>
);

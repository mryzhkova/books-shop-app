import { Link } from '@mryzhkova/packages-shared/components/link';
import { SVGIcon } from '@mryzhkova/packages-shared/components/svg-icon';
import { Text } from '@mryzhkova/packages-shared/components/text';

import ArrowIcon from '@/assets/icons/arrow.svg';
import BookCover from '@/assets/images/book-cover.svg';

import { CardImage, CardInfo, LinkText, StyledCard, StyledIcon } from './styled';

type Props = {
    id: string;
    title: string;
    linkText: string;
    image?: string;
};

export const BookCard = ({ title, image, linkText, id }: Props) => (
    <StyledCard>
        <CardImage>{image ? <img src={image} alt='book-cover' /> : <BookCover />}</CardImage>
        <CardInfo>
            <Text>{title}</Text>
            <Link to={`/books/${id}`}>
                <LinkText>
                    <Text size='s' weight='light'>
                        {linkText}
                    </Text>
                    <StyledIcon>
                        <SVGIcon Icon={ArrowIcon} />
                    </StyledIcon>
                </LinkText>
            </Link>
        </CardInfo>
    </StyledCard>
);

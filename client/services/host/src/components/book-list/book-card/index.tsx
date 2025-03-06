import { Link } from '@mryzhkova/packages-shared/components/link';
import { SVGIcon } from '@mryzhkova/packages-shared/components/svg-icon';
import { Text } from '@mryzhkova/packages-shared/components/text';
import { booksRoutes } from '@mryzhkova/packages-shared/constants';

import ArrowIcon from '@/assets/icons/arrow.svg';
import BookCover from '@/assets/images/book-cover.svg';

import { StyledCardImage, StyledCardInfo, StyledLinkText, StyledCard, StyledIcon } from './styled';

type Props = {
    id: string;
    title: string;
    linkText: string;
    image?: string;
};

export const BookCard = ({ title, image, linkText, id }: Props) => (
    <StyledCard>
        <StyledCardImage>
            {image ? <img src={image} alt='book-cover' /> : <BookCover />}
        </StyledCardImage>
        <StyledCardInfo>
            <Text>{title}</Text>
            <Link to={`${booksRoutes.books}/${id}`}>
                <StyledLinkText>
                    <Text size='s' weight='light'>
                        {linkText}
                    </Text>
                    <StyledIcon>
                        <SVGIcon Icon={ArrowIcon} />
                    </StyledIcon>
                </StyledLinkText>
            </Link>
        </StyledCardInfo>
    </StyledCard>
);

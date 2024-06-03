import { useParams } from 'react-router-dom';

import { useBookQuery } from '@mryzhkova/packages-shared/api/book';
import { Gap } from '@mryzhkova/packages-shared/components/gap';
import { Text } from '@mryzhkova/packages-shared/components/text';

import BannerImage from '@/assets/banner.png';

import { BookDescription } from '../book-description';
import { BookInfoCard } from '../book-info-card';

import { BookInfoWrapper, StyledImage } from './styled';

export const BookInfoApp = () => {
    const { id } = useParams();

    const { data, loading, error } = useBookQuery(id);

    const book = data?.getBook;

    if (loading) {
        return (
            <>
                <Gap size='8xl' />
                <Text tag='h3' size='6xl' align='center'>
                    Loading...
                </Text>
                <Gap size='8xl' />
            </>
        );
    }

    if (error) {
        return (
            <>
                <Gap size='8xl' />
                <Text tag='h3' size='6xl' align='center'>
                    Loading Error
                </Text>
                <Gap size='8xl' />
            </>
        );
    }

    if (!book) {
        return null;
    }

    const {
        title,
        author,
        lang,
        publisher,
        pubDate,
        coverBy,
        coverByEmail,
        description,
        id: bookId,
    } = book;

    return (
        <>
            <Gap size='4xl' />
            <BookInfoWrapper>
                <div>
                    <BookInfoCard
                        id={bookId}
                        author={author}
                        title={title}
                        lang={lang}
                        publisher={publisher}
                        pubDate={pubDate}
                        coverBy={coverBy}
                    />
                    <BookDescription
                        author={author}
                        title={title}
                        coverByEmail={coverByEmail}
                        coverBy={coverBy}
                        description={description}
                    />
                </div>
                <StyledImage>
                    <img src={BannerImage} alt='banner' />
                </StyledImage>
            </BookInfoWrapper>
        </>
    );
};

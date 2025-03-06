import { useParams } from 'react-router-dom';

import { useBookQuery } from '@mryzhkova/packages-shared/apollo-client/book';
import { ErrorBoundary } from '@mryzhkova/packages-shared/components/error-boundary';
import { LoadWrapper } from '@mryzhkova/packages-shared/components/load-wrapper';
import { PageError } from '@mryzhkova/packages-shared/components/page-error';

import BannerImage from '@/assets/banner.png';

import { BookDescription } from '../book-description';
import { BookInfoCard } from '../book-info-card';

import { StyledBookInfo, StyledImage } from './styled';

export const BookInfoApp = () => {
    const { id } = useParams();

    const { data, loading, error, refetch } = useBookQuery(id || '');
    const book = data?.getBook;

    return (
        <ErrorBoundary fallback={<PageError message='Book Info Service Error' />}>
            <LoadWrapper
                loading={loading}
                error={error}
                message='Book info loading error'
                onRetry={refetch}
            >
                {book && (
                    <StyledBookInfo>
                        <div>
                            <BookInfoCard
                                id={book.id}
                                author={book.author}
                                title={book.title}
                                lang={book.lang}
                                publisher={book.publisher}
                                pubDate={book.pubDate}
                                coverBy={book.coverBy}
                            />
                            <BookDescription
                                author={book.author}
                                title={book.title}
                                coverByEmail={book.coverByEmail}
                                coverBy={book.coverBy}
                                description={book.description}
                            />
                        </div>
                        <StyledImage>
                            <img src={BannerImage} alt='banner' />
                        </StyledImage>
                    </StyledBookInfo>
                )}
            </LoadWrapper>
        </ErrorBoundary>
    );
};

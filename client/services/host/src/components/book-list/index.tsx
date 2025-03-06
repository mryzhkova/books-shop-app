import { useBooksQuery } from '@mryzhkova/packages-shared/apollo-client/book';
import { Gap } from '@mryzhkova/packages-shared/components/gap';
import { LoadWrapper } from '@mryzhkova/packages-shared/components/load-wrapper';
import { Text } from '@mryzhkova/packages-shared/components/text';

import { BookCard } from './book-card';
import { StyledList } from './styled';

export const BookList = () => {
    const { data, loading, error, refetch } = useBooksQuery();
    const books = data?.getAllBooks;

    return (
        <LoadWrapper
            loading={loading}
            error={error}
            message='Book list loading error'
            onRetry={refetch}
        >
            {books && (
                <>
                    <Text tag='h2' size='6xl' align='center'>
                        Products
                    </Text>
                    <Text tag='h3' size='l' align='center'>
                        Popular books
                    </Text>
                    <Gap size='4xl' />
                    <StyledList>
                        {books.map(({ id, title, cover }) => (
                            <BookCard
                                key={id}
                                id={id}
                                title={title}
                                image={cover}
                                linkText='Read more'
                            />
                        ))}
                    </StyledList>
                    <Gap size='6xl' />
                </>
            )}
        </LoadWrapper>
    );
};

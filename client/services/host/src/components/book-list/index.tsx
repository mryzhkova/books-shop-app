import { useBooksQuery } from '@mryzhkova/packages-shared/api/book';
import { Gap } from '@mryzhkova/packages-shared/components/gap';
import { Text } from '@mryzhkova/packages-shared/components/text';

import { BookCard } from './book-card';
import { ListWrapper } from './styled';

export const BookList = () => {
    const { data, loading, error } = useBooksQuery();

    const books = data?.getAllBooks;

    if (loading) {
        return (
            <>
                <Text tag='h3' size='6xl' align='center'>
                    Loading...
                </Text>
                <Gap size='6xl' />
            </>
        );
    }

    if (error) {
        return (
            <>
                <Text tag='h3' size='6xl' align='center'>
                    Loading Error
                </Text>
                <Gap size='6xl' />
            </>
        );
    }

    if (!books) {
        return null;
    }

    return (
        <>
            <Text tag='h2' size='6xl' align='center'>
                Products
            </Text>
            <Text tag='h3' size='l' align='center'>
                Popular books
            </Text>
            <Gap size='4xl' />
            <ListWrapper>
                {books.map(({ id, title, cover }) => (
                    <BookCard key={id} id={id} title={title} image={cover} linkText='Read more' />
                ))}
            </ListWrapper>
            <Gap size='6xl' />
        </>
    );
};

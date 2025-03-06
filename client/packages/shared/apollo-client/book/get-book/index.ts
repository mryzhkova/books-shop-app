import { gql, useQuery } from '@apollo/client';

import { type BookQueryResponse } from '../types';

export const GET_BOOK = gql`
    query GetBook($id: ID!) {
        getBook(id: $id) {
            id
            title
            description
            author
            lang
            publisher
            pubDate
            coverBy
            coverByEmail
        }
    }
`;

export const useBookQuery = (id: string) =>
    useQuery<BookQueryResponse>(GET_BOOK, {
        variables: {
            id,
        },
    });

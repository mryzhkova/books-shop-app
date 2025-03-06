import { gql, useQuery } from '@apollo/client';

import { type BooksQueryResponse } from '../types';

export const GET_BOOKS = gql`
    query GetAllBook {
        getAllBooks {
            id
            title
            cover
        }
    }
`;

export const useBooksQuery = () => useQuery<BooksQueryResponse>(GET_BOOKS);

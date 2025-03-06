import { gql, useMutation } from '@apollo/client';

import { type CreateCartResponse } from '../types';

export const CREATE_CART = gql`
    mutation CreateCart($bookId: ID!) {
        createCart(bookId: $bookId) {
            id
            books {
                id
            }
            cost
        }
    }
`;

export const useCreateCart = (bookId: string) =>
    useMutation<CreateCartResponse>(CREATE_CART, {
        variables: {
            bookId,
        },
    });

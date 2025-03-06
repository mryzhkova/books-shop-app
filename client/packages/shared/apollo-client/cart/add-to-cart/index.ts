import { gql, useMutation } from '@apollo/client';

import { type AddToCartResponse } from '../types';

const ADD_TO_CART = gql`
    mutation AddToCart($id: ID!, $bookId: ID!) {
        addToCart(id: $id, bookId: $bookId) {
            id
            books {
                id
            }
            cost
        }
    }
`;

export const useAddToCart = (bookId: string) =>
    useMutation<AddToCartResponse>(ADD_TO_CART, {
        variables: {
            bookId,
        },
    });

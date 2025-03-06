import { gql, useMutation } from '@apollo/client';

import { getCartData } from '../../../utils/cart/get-cart-data';
import { type RemoveFromCartResponse } from '../types';

const REMOVE_FROM_CART = gql`
    mutation RemoveFromCart($id: ID!, $bookId: ID!) {
        removeFromCart(id: $id, bookId: $bookId) {
            id
            books {
                id
            }
            cost
        }
    }
`;

export const useRemoveFromCart = (bookId: string) => {
    const { cartId } = getCartData();

    return useMutation<RemoveFromCartResponse>(REMOVE_FROM_CART, {
        variables: {
            id: cartId,
            bookId,
        },
    });
};

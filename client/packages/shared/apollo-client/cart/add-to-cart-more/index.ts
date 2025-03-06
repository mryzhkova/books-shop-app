import { gql, useMutation } from '@apollo/client';

import { getCartData } from '../../../utils/cart/get-cart-data';
import { type AddToCartMoreResponse } from '../types';

const ADD_TO_CART_MORE = gql`
    mutation AddToCartMore($id: ID!, $bookId: ID!, $count: Int!) {
        addToCartMore(id: $id, bookId: $bookId, count: $count) {
            id
            books {
                id
                count
            }
            cost
        }
    }
`;

export const useAddToCartMore = (bookId: string) => {
    const { cartId } = getCartData();

    return useMutation<AddToCartMoreResponse>(ADD_TO_CART_MORE, {
        variables: {
            id: cartId,
            bookId,
        },
    });
};

import { gql, useQuery } from '@apollo/client';

import { getCartData } from '../../../utils/cart/get-cart-data';
import { type CartQueryResponse } from '../types';

export const GET_CART = gql`
    query GetCart($id: ID!) {
        getCart(id: $id) {
            id
            cost
            books {
                id
                count
                info {
                    title
                    price
                }
            }
        }
    }
`;

export const useCartQuery = () => {
    const { cartId } = getCartData();

    return useQuery<CartQueryResponse>(GET_CART, {
        skip: !cartId,
        variables: {
            id: cartId,
        },
    });
};

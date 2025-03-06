import { gql, useMutation } from '@apollo/client';

import { getCartData } from '../../../utils/cart/get-cart-data';
import { type CreateOrderResponse } from '../types';

const CREATE_ORDER = gql`
    mutation CreateOrder($cartId: ID!) {
        createOrder(cartId: $cartId)
    }
`;

export const useCreateOrder = () => {
    const { cartId } = getCartData();

    return useMutation<CreateOrderResponse>(CREATE_ORDER, {
        variables: {
            cartId,
        },
    });
};

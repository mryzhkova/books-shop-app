import { gql, useMutation } from '@apollo/client';

import { getCartData } from '../../../utils/cart/get-cart-data';
import { GET_CART } from '../../cart/get-cart';
import { type CaptureOrderResponse, type OrderInfo } from '../types';

const CAPTURE_ORDER = gql`
    mutation CaptureOrder($orderId: ID!, $cartId: ID!, $orderInfo: OrderInfo!) {
        captureOrder(orderId: $orderId, cartId: $cartId, orderInfo: $orderInfo)
    }
`;

export const useCaptureOrder = (orderId: string, orderInfo: OrderInfo) => {
    const { cartId } = getCartData();

    return useMutation<CaptureOrderResponse>(CAPTURE_ORDER, {
        variables: {
            orderId,
            cartId,
            orderInfo,
        },
        refetchQueries: [
            {
                query: GET_CART,
                variables: { id: cartId },
            },
        ],
    });
};

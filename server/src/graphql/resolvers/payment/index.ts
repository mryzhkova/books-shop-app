import checkoutNodeJssdk from '@paypal/checkout-server-sdk';
import { getCartsRef, getOrdersRef } from '@/db/utils';
import { paypalClient, paypalRestClient } from '@/paypal/config';
import { type CartBook, type OrderInfo } from '@/types';
import { getCartCost } from '@/utils';

export const paymentResolver = {
    Query: {
        generateClientToken: async () => {
            try {
                const token = await paypalRestClient.generateClientToken();

                return token;
            } catch (error) {
                return error;
            }
        },
    },
    Mutation: {
        createOrder: async (_: any, args: { cartId: string }) => {
            try {
                const cart = await getCartsRef().doc(args.cartId).get();
                const cartBooks: CartBook[] = cart.data()?.books;

                const cost = getCartCost(cartBooks);

                const request = new checkoutNodeJssdk.orders.OrdersCreateRequest();
                request.requestBody({
                    intent: 'CAPTURE',
                    purchase_units: [
                        {
                            amount: {
                                currency_code: 'USD',
                                value: cost.toString(),
                            },
                        },
                    ],
                });

                const response = await paypalClient().execute(request);

                return response.result.id;
            } catch (error) {
                return error;
            }
        },
        captureOrder: async (
            _: any,
            args: { orderId: string; cartId: string; orderInfo: OrderInfo },
        ) => {
            try {
                const request = new checkoutNodeJssdk.orders.OrdersCaptureRequest(args.orderId);
                const response = await paypalClient().execute(request);

                const status = response.result.status;

                if (status === 'COMPLETED') {
                    const cart = getCartsRef().doc(args.cartId);
                    await cart.update({ books: [], cost: 0 });

                    await getOrdersRef().add({
                        info: args.orderInfo,
                        status,
                    });

                    return response.result.id;
                } else {
                    return 'Payment not completed';
                }
            } catch (error) {
                return error;
            }
        },
    },
};

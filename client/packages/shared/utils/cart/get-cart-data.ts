import { CART_KEY } from './constants';
import { type LocalCartData } from './types';

export const getCartData = (): LocalCartData => {
    const cartData = localStorage.getItem(CART_KEY);

    return cartData ? JSON.parse(cartData) : {};
};

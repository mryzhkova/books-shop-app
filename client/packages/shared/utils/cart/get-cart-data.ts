import { CART_KEY } from './constants';

type LocalCartData = {
    cartId?: string;
    currentBooks?: string[];
};

export const getCartData = (): LocalCartData => {
    const cartData = localStorage.getItem(CART_KEY);

    return cartData ? JSON.parse(cartData) : {};
};

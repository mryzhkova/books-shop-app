import { getEventBus } from '../event-bus';

import { CART_KEY } from './constants';
import { type LocalCartData } from './types';

export const resetCartData = () => {
    const { cartId }: LocalCartData = JSON.parse(localStorage.getItem(CART_KEY) ?? '');
    const cartData = JSON.stringify({ cartId, currentBooks: [] });

    getEventBus()?.emit('CHANGE_HEADER_CONFIG', { activeCart: false });

    localStorage.setItem(CART_KEY, cartData);
};

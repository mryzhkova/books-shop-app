import { CartBook } from '../../types';
import { getEventBus } from '../event-bus';

import { CART_KEY } from './constants';

export const setCartData = (cartId: string, books: CartBook[]) => {
    const currentBooks = books.map((book) => book.id);
    const cartData = JSON.stringify({ cartId, currentBooks });

    getEventBus()?.emit('CHANGE_HEADER_CONFIG', { activeCart: !!currentBooks.length });

    localStorage.setItem(CART_KEY, cartData);
};

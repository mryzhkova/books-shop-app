import { type CartBook } from '@/types';

export const getCartCost = (cartBooks: CartBook[]): number => {
    const cartTotal = cartBooks.reduce((total, { info, count }) => total + count * info.price, 0);

    return Number.isInteger(cartTotal) ? cartTotal : +cartTotal.toFixed(2);
};

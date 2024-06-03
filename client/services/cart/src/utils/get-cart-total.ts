import { CartBook } from '@mryzhkova/packages-shared/types';

export const getCartTotal = (books: CartBook[]) => {
    const cartTotal = books.reduce((total, { info, count }) => total + count * info.price, 0);

    return `$ ${Number.isInteger(cartTotal) ? cartTotal : cartTotal.toFixed(2)}`;
};

import { type Book } from '../book/types';

export type CartBook = {
    id: string;
    count: number;
    info: Book;
};

export type Cart = {
    id: string;
    books: CartBook[];
    cost: number;
};

export type CartQueryResponse = {
    getCart: Cart;
};

export type CreateCartResponse = {
    createCart: Cart;
};

export type RemoveFromCartResponse = {
    removeFromCart: Cart;
};

export type AddToCartMoreResponse = {
    addToCartMore: Cart;
};

export type AddToCartResponse = {
    addToCart: Cart;
};

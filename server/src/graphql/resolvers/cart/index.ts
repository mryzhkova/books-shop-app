import { firestore } from 'firebase-admin';
import { type CartBook } from '../../../types';
import { getBooksRef, getCartsRef } from '../../../db/utils';

export const cartResolver = {
    Query: {
        getCart: async (_: any, args: { id: string }) => {
            try {
                const doc = await getCartsRef().doc(args.id).get();

                return {
                    id: doc.id,
                    ...doc.data(),
                };
            } catch (e) {
                console.log(e);
                return e as Error;
            }
        },
    },
    Mutation: {
        createCart: async (_: any, args: { bookId: string }) => {
            try {
                const book = await getBooksRef().doc(args.bookId).get();
                const cartItem = {
                    books: [{ id: args.bookId, count: 1, info: { ...book.data() } }],
                };
                const cart = await getCartsRef().add(cartItem);

                return {
                    id: cart.id,
                    ...(await cart.get()).data(),
                };
            } catch (e) {
                console.log(e);
                return e as Error;
            }
        },
        removeCart: async (_: any, args: { id: string }) => {
            try {
                const res = await getCartsRef().doc(args.id).delete();

                return res.writeTime;
            } catch (e) {
                console.log(e);
                return e as Error;
            }
        },
        addToCart: async (_: any, args: { id: string; bookId: string }) => {
            try {
                const cart = getCartsRef().doc(args.id);
                const book = await getBooksRef().doc(args.bookId).get();

                await cart.update({
                    books: firestore.FieldValue.arrayUnion({
                        id: args.bookId,
                        count: 1,
                        info: { ...book.data() },
                    }),
                });

                return {
                    id: cart.id,
                    ...(await cart.get()).data(),
                };
            } catch (e) {
                console.log(e);
                return e as Error;
            }
        },
        removeFromCart: async (_: any, args: { id: string; bookId: string }) => {
            try {
                const cart = getCartsRef().doc(args.id);
                const cartBooks: CartBook[] = (await cart.get()).data()?.books;

                await cart.update({ books: cartBooks.filter(({ id }) => id !== args.bookId) });

                return {
                    id: cart.id,
                    ...(await cart.get()).data(),
                };
            } catch (e) {
                return e as Error;
            }
        },
        addToCartMore: async (_: any, args: { id: string; bookId: string; count: number }) => {
            try {
                const cart = getCartsRef().doc(args.id);
                const cartBooks: CartBook[] = (await cart.get()).data()?.books;

                const bookIndex = cartBooks.findIndex(({ id }) => id === args.bookId);

                if (bookIndex !== -1) {
                    cartBooks[bookIndex].count = args.count;

                    await cart.update({
                        books: cartBooks,
                    });
                }

                return {
                    id: cart.id,
                    ...(await cart.get()).data(),
                };
            } catch (e) {
                console.log(e);
                return e as Error;
            }
        },
    },
};

import { firestore } from 'firebase-admin';
import { type Book, type CartBook } from '@/types';
import { getBooksRef, getCartsRef } from '@/db/utils';
import { getCartCost } from '@/utils';

export const cartResolver = {
    Query: {
        getCart: async (_: any, args: { id: string }) => {
            try {
                const doc = await getCartsRef().doc(args.id).get();

                return {
                    id: doc.id,
                    ...doc.data(),
                };
            } catch (error) {
                return error;
            }
        },
    },
    Mutation: {
        createCart: async (_: any, args: { bookId: string }) => {
            try {
                const book = await getBooksRef().doc(args.bookId).get();
                const bookInfo = book.data();

                const cart = await getCartsRef().add({
                    books: [
                        {
                            id: args.bookId,
                            count: 1,
                            info: bookInfo,
                        },
                    ],
                    cost: bookInfo?.price,
                });

                return {
                    id: cart.id,
                    ...(await cart.get()).data(),
                };
            } catch (error) {
                return error;
            }
        },
        addToCart: async (_: any, args: { id: string; bookId: string }) => {
            try {
                const cart = getCartsRef().doc(args.id);
                const book = await getBooksRef().doc(args.bookId).get();

                const newBook: CartBook = {
                    id: args.bookId,
                    count: 1,
                    info: book.data() as Book,
                };

                const cartBooks: CartBook[] = (await cart.get()).data()?.books;
                const cost = getCartCost([...cartBooks, newBook]);

                await cart.update({ books: firestore.FieldValue.arrayUnion(newBook), cost });

                return {
                    id: cart.id,
                    ...(await cart.get()).data(),
                };
            } catch (error) {
                return error;
            }
        },
        removeFromCart: async (_: any, args: { id: string; bookId: string }) => {
            try {
                const cart = getCartsRef().doc(args.id);
                const cartBooks: CartBook[] = (await cart.get()).data()?.books;

                const books = cartBooks.filter(({ id }) => id !== args.bookId);
                const cost = getCartCost(books);

                await cart.update({ books, cost });

                return {
                    id: cart.id,
                    ...(await cart.get()).data(),
                };
            } catch (error) {
                return error;
            }
        },
        addToCartMore: async (_: any, args: { id: string; bookId: string; count: number }) => {
            try {
                const cart = getCartsRef().doc(args.id);
                const cartData = await cart.get();
                const books: CartBook[] = cartData.data()?.books;

                const bookIndex = books.findIndex(({ id }) => id === args.bookId);

                if (bookIndex !== -1) {
                    books[bookIndex].count = args.count;
                    const cost = getCartCost(books);

                    await cart.update({ books, cost });
                }

                return {
                    id: cart.id,
                    ...(await cart.get()).data(),
                };
            } catch (error) {
                return error;
            }
        },
    },
};

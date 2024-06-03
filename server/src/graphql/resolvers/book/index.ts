import { getBooksRef } from '../../../db/utils';

export const bookResolver = {
    Query: {
        getAllBooks: async () => {
            try {
                const { docs } = await getBooksRef().get();

                return docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
            } catch (e) {
                console.log(e);
                return e as Error;
            }
        },
        getBook: async (_: any, args: { id: string }) => {
            try {
                const doc = await getBooksRef().doc(args.id).get();

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
};

import { firestore } from 'firebase-admin';

let db: firestore.Firestore;

export const initDb = (): void => {
    db = firestore();
};

export const getBooksRef = (): firestore.CollectionReference => db.collection('books');

export const getCartsRef = (): firestore.CollectionReference => db.collection('carts');

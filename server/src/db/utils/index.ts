import { type Firestore, getFirestore, type CollectionReference } from 'firebase-admin/firestore';

let db: Firestore;

export const initDb = (): void => {
    db = getFirestore();
};

export const getBooksRef = (): CollectionReference => db.collection('books');

export const getCartsRef = (): CollectionReference => db.collection('carts');

export const getOrdersRef = (): CollectionReference => db.collection('orders');

export interface Book {
    id: string;
    title: string;
    description: string;
    price: number;
    author: string;
    lang: string;
    publisher: string;
    pubDate: string;
    cover?: string;
    coverBy: string;
    coverByEmail: string;
}

export interface CartBook {
    id: string;
    count: number;
    info: Book;
}

export interface Cart {
    id: string;
    books: CartBook[];
    cost: number;
}

export interface OrderInfo {
    email: string;
    name: string;
    lastName: string;
    country: string;
    city: string;
    address: string;
    province?: string;
    postalCode: string;
    shippingNote?: string;
    newsletter?: boolean;
    save?: boolean;
}

export interface PayPalToken {
    clientToken: string;
    clientId: string;
}

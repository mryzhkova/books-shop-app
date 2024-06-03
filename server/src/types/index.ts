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
}

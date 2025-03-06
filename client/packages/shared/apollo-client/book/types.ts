export type Book = {
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
};

export type BooksQueryResponse = {
    getAllBooks: Book[];
};

export type BookQueryResponse = {
    getBook: Book;
};

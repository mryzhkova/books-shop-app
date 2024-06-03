import bookInfoRoutes from 'bookInfo/Router';
import cartRoutes from 'cart/Router';
import { createBrowserRouter } from 'react-router-dom';

import { BooksApp } from '@/components/books-app';
import { Layout } from '@/components/layout';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <BooksApp />,
            },
            ...bookInfoRoutes,
            ...cartRoutes,
        ],
    },
]);

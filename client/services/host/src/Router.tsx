import bookInfoRoutes from 'bookInfo/Router';
import cartRoutes from 'cart/Router';
import paymentRoutes from 'payment/Router';
import { createBrowserRouter } from 'react-router-dom';

import { PageError } from '@mryzhkova/packages-shared/components/page-error';

import { BooksApp } from '@/components/books-app';
import { Layout } from '@/components/layout';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <PageError message='Page not found' />,
        children: [
            {
                path: '/',
                element: <BooksApp />,
            },
            ...bookInfoRoutes,
            ...cartRoutes,
            ...paymentRoutes,
        ],
    },
]);

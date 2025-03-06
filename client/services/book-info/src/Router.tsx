import { createBrowserRouter } from 'react-router-dom';

import { booksRoutes } from '@mryzhkova/packages-shared/constants';

import { BookInfoApp } from '@/components/book-info-app';

const routes = [
    {
        path: `${booksRoutes.books}/:id`,
        element: <BookInfoApp />,
    },
];

export const router = createBrowserRouter(routes);

export default routes;

import { createBrowserRouter } from 'react-router-dom';

import { ErrorBoundary } from '@mryzhkova/packages-shared/components/error-boundary';

import { BookInfoApp } from '@/components/book-info-app';

const routes = [
    {
        path: '/books/:id',
        element: (
            <ErrorBoundary fallback={<div>Book Info Service Error</div>}>
                <BookInfoApp />
            </ErrorBoundary>
        ),
    },
];

export const router = createBrowserRouter(routes);

export default routes;

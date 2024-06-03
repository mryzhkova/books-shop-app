import { createBrowserRouter } from 'react-router-dom';

import { ErrorBoundary } from '@mryzhkova/packages-shared/components/error-boundary';

import { CartApp } from '@/components/cart-app';

const routes = [
    {
        path: '/cart',
        element: (
            <ErrorBoundary fallback={<div>Cart Service Error</div>}>
                <CartApp />
            </ErrorBoundary>
        ),
    },
];

export const router = createBrowserRouter(routes);

export default routes;

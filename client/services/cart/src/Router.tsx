import { createBrowserRouter } from 'react-router-dom';

import { cartRoutes } from '@mryzhkova/packages-shared/constants';

import { CartApp } from '@/components/cart-app';

const routes = [
    {
        path: cartRoutes.cart,
        element: <CartApp />,
    },
];

export const router = createBrowserRouter(routes);

export default routes;

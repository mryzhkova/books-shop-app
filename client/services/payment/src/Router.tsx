import { createBrowserRouter } from 'react-router-dom';

import { paymentRoutes } from '@mryzhkova/packages-shared/constants';

import { Confirmation } from '@/components/confirmation';
import { PaymentApp } from '@/components/payment-app';
import { PaymentError } from '@/components/payment-error';

const routes = [
    {
        path: paymentRoutes.payment,
        element: <PaymentApp />,
    },
    {
        path: paymentRoutes.paymentSuccess,
        element: <Confirmation />,
    },
    {
        path: paymentRoutes.paymentError,
        element: <PaymentError />,
    },
];

export const router = createBrowserRouter(routes);

export default routes;

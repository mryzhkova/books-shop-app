import { useAtom, useAtomValue } from 'jotai';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useCaptureOrder, useCreateOrder } from '@mryzhkova/packages-shared/apollo-client/payment';
import { paymentRoutes } from '@mryzhkova/packages-shared/constants';
import { resetCartData } from '@mryzhkova/packages-shared/utils/cart/reset-cart-data';

import { paymentFormAtom, paymentOrderAtom } from '@/store';

export const usePayPalPayment = () => {
    const navigate = useNavigate();

    const paymentInfo = useAtomValue(paymentFormAtom);
    const [paymentOrder, setPaymentOrder] = useAtom(paymentOrderAtom);

    const [paymentLoading, setPaymentLoading] = useState(false);

    const [createOrder] = useCreateOrder();
    const [captureOrder] = useCaptureOrder(paymentOrder, paymentInfo);

    const handleCreateOrder = async () => {
        setPaymentLoading(true);

        const { data } = await createOrder();
        const order = data?.createOrder || '';

        setPaymentOrder(order);

        return order;
    };

    const handleApprove = async () => {
        const { data: captureData } = await captureOrder();

        if (captureData?.captureOrder) {
            resetCartData();
            setPaymentLoading(false);

            navigate(paymentRoutes.paymentSuccess);
        } else {
            navigate(paymentRoutes.paymentError, { state: { fromApp: true } });
        }
    };

    const handleError = () => {
        navigate(paymentRoutes.paymentError, { state: { fromApp: true } });
    };

    return {
        handleCreateOrder,
        handleApprove,
        handleError,
        paymentLoading,
    };
};

import { type JSX } from 'react';

import { DetailsStep } from '@/components/details-step';
import { PaymentStep } from '@/components/payment-step';
import { ShippingStep } from '@/components/shipping-step';
import { type PaymentStep as PaymentStepType } from '@/types';

export const stepViewMapper: Record<PaymentStepType, () => JSX.Element | null> = {
    details: DetailsStep,
    shipping: ShippingStep,
    payment: PaymentStep,
};

export const steps: Record<PaymentStepType, { title: string; order: number }> = {
    details: {
        title: 'Details',
        order: 1,
    },
    shipping: {
        title: 'Shipping',
        order: 2,
    },
    payment: {
        title: 'Payment',
        order: 3,
    },
};

export const countries = [
    { id: '1', content: 'Italy' },
    { id: '2', content: 'USA' },
    { id: '3', content: 'England' },
    { id: '4', content: 'Canada' },
];

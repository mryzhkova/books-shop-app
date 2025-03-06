import { atom } from 'jotai';

import { type OrderInfo } from '@mryzhkova/packages-shared/apollo-client/payment/types';

import { type PaymentStep } from '@/types';

export const paymentStepAtom = atom<PaymentStep>('details');

export const paymentOrderAtom = atom<string>('');

export const paymentFormAtom = atom<OrderInfo>({
    email: '',
    name: '',
    lastName: '',
    country: '',
    address: '',
    city: '',
    province: '',
    postalCode: '',
    shippingNote: '',
    newsletter: false,
    save: false,
});

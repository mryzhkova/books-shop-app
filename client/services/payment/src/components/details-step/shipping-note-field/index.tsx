import { Controller, type Control } from 'react-hook-form';

import { type OrderInfo } from '@mryzhkova/packages-shared/apollo-client/payment/types';
import { Input } from '@mryzhkova/packages-shared/components/input';

type Props = {
    control: Control<OrderInfo>;
};

export const ShippingNoteField = ({ control }: Props) => (
    <Controller
        name='shippingNote'
        control={control}
        render={({ field }) => (
            <Input {...field} size='xl' placeholder='Shipping note (optional)' />
        )}
    />
);

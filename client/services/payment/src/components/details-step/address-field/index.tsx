import { Controller, type Control, type UseFormTrigger } from 'react-hook-form';

import { type OrderInfo } from '@mryzhkova/packages-shared/apollo-client/payment/types';
import { Input } from '@mryzhkova/packages-shared/components/input';

type Props = {
    control: Control<OrderInfo>;
    trigger: UseFormTrigger<OrderInfo>;
    error?: string;
};

export const AddressField = ({ control, error, trigger }: Props) => (
    <Controller
        name='address'
        control={control}
        rules={{ required: 'Address is required' }}
        render={({ field }) => (
            <Input
                {...field}
                size='xl'
                placeholder='Address and number'
                error={error}
                onBlur={() => {
                    field.onBlur();
                    trigger('address');
                }}
            />
        )}
    />
);

import { Controller, type Control, type UseFormTrigger } from 'react-hook-form';

import { type OrderInfo } from '@mryzhkova/packages-shared/apollo-client/payment/types';
import { Input } from '@mryzhkova/packages-shared/components/input';

type Props = {
    control: Control<OrderInfo>;
    trigger: UseFormTrigger<OrderInfo>;
    error?: string;
};

export const PostalCodeField = ({ control, error, trigger }: Props) => (
    <Controller
        name='postalCode'
        control={control}
        rules={{
            required: 'Postal Code is required',
            maxLength: 10,
            pattern: {
                value: /^[0-9]+$/,
                message: 'Postal Code must contain only numbers',
            },
        }}
        render={({ field }) => (
            <Input
                {...field}
                size='s'
                placeholder='Postal Code'
                error={error}
                onBlur={() => {
                    field.onBlur();
                    trigger('postalCode');
                }}
            />
        )}
    />
);

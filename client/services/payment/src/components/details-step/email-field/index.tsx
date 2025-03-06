import { Controller, type Control, type UseFormTrigger } from 'react-hook-form';

import { type OrderInfo } from '@mryzhkova/packages-shared/apollo-client/payment/types';
import { Input } from '@mryzhkova/packages-shared/components/input';

type Props = {
    control: Control<OrderInfo>;
    trigger: UseFormTrigger<OrderInfo>;
    error?: string;
};

export const EmailField = ({ control, error, trigger }: Props) => (
    <Controller
        name='email'
        control={control}
        rules={{
            required: 'Email is required',
            pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: 'Email not valid',
            },
        }}
        render={({ field }) => (
            <Input
                {...field}
                size='xl'
                placeholder='Email'
                error={error}
                onBlur={() => {
                    field.onBlur();
                    trigger('email');
                }}
            />
        )}
    />
);

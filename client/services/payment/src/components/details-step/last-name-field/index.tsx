import { Controller, type Control, type UseFormTrigger } from 'react-hook-form';

import { type OrderInfo } from '@mryzhkova/packages-shared/apollo-client/payment/types';
import { Input } from '@mryzhkova/packages-shared/components/input';

type Props = {
    control: Control<OrderInfo>;
    trigger: UseFormTrigger<OrderInfo>;
    error?: string;
};

export const LastNameField = ({ control, error, trigger }: Props) => (
    <Controller
        name='lastName'
        control={control}
        rules={{ required: 'Second Name is required', maxLength: 30 }}
        render={({ field }) => (
            <Input
                {...field}
                size='m'
                placeholder='Second Name'
                error={error}
                onBlur={() => {
                    field.onBlur();
                    trigger('lastName');
                }}
            />
        )}
    />
);

import { Controller, type Control, type UseFormTrigger } from 'react-hook-form';

import { type OrderInfo } from '@mryzhkova/packages-shared/apollo-client/payment/types';
import { Input } from '@mryzhkova/packages-shared/components/input';

type Props = {
    control: Control<OrderInfo>;
    trigger: UseFormTrigger<OrderInfo>;
    error?: string;
};

export const NameField = ({ control, error, trigger }: Props) => (
    <Controller
        name='name'
        control={control}
        rules={{ required: 'Name is required', maxLength: 20 }}
        render={({ field }) => (
            <Input
                {...field}
                size='m'
                placeholder='Name'
                error={error}
                onBlur={() => {
                    field.onBlur();
                    trigger('name');
                }}
            />
        )}
    />
);

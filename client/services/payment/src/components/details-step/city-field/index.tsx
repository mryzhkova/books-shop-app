import { Controller, type Control, type UseFormTrigger } from 'react-hook-form';

import { type OrderInfo } from '@mryzhkova/packages-shared/apollo-client/payment/types';
import { Input } from '@mryzhkova/packages-shared/components/input';

type Props = {
    control: Control<OrderInfo>;
    trigger: UseFormTrigger<OrderInfo>;
    error?: string;
};

export const CityField = ({ control, error, trigger }: Props) => (
    <Controller
        name='city'
        control={control}
        rules={{ required: 'City is required' }}
        render={({ field }) => (
            <Input
                {...field}
                size='s'
                placeholder='City'
                error={error}
                onBlur={() => {
                    field.onBlur();
                    trigger('city');
                }}
            />
        )}
    />
);

import { Controller, type Control, type UseFormTrigger } from 'react-hook-form';

import { type OrderInfo } from '@mryzhkova/packages-shared/apollo-client/payment/types';
import { Select } from '@mryzhkova/packages-shared/components/select';

import { countries } from '@/constants';

type Props = {
    control: Control<OrderInfo>;
    trigger: UseFormTrigger<OrderInfo>;
    error?: string;
};

export const CountryField = ({ control, error, trigger }: Props) => (
    <Controller
        name='country'
        control={control}
        rules={{
            required: 'Country/Region is required',
        }}
        render={({ field }) => (
            <Select
                value={field.value}
                onChange={(value) => {
                    field.onChange(value);
                    trigger('country');
                }}
                options={countries}
                error={error}
                placeholder='Choose country'
                label='Country/Region'
            />
        )}
    />
);

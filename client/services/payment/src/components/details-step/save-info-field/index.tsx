import { Controller, type Control } from 'react-hook-form';

import { type OrderInfo } from '@mryzhkova/packages-shared/apollo-client/payment/types';
import { Checkbox } from '@mryzhkova/packages-shared/components/checkbox';

type Props = {
    control: Control<OrderInfo>;
};

export const SaveInfoField = ({ control }: Props) => (
    <Controller
        name='save'
        control={control}
        render={({ field }) => (
            <Checkbox
                checked={field.value}
                onChange={field.onChange}
                label='Save this informations for a future fast checkout'
            />
        )}
    />
);

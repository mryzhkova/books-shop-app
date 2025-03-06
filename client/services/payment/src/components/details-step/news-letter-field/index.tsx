import { Controller, type Control } from 'react-hook-form';

import { type OrderInfo } from '@mryzhkova/packages-shared/apollo-client/payment/types';
import { Checkbox } from '@mryzhkova/packages-shared/components/checkbox';

type Props = {
    control: Control<OrderInfo>;
};

export const NewsletterField = ({ control }: Props) => (
    <Controller
        name='newsletter'
        control={control}
        render={({ field }) => (
            <Checkbox
                checked={field.value}
                onChange={field.onChange}
                label='Add me to Candleaf newsletter for a 10% discount'
            />
        )}
    />
);

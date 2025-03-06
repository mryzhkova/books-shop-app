import { Controller, type Control } from 'react-hook-form';

import { type OrderInfo } from '@mryzhkova/packages-shared/apollo-client/payment/types';
import { Input } from '@mryzhkova/packages-shared/components/input';

type Props = {
    control: Control<OrderInfo>;
};

export const ProvinceField = ({ control }: Props) => (
    <Controller
        name='province'
        control={control}
        render={({ field }) => <Input {...field} size='s' placeholder='Province' />}
    />
);

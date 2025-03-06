import { useAtomValue } from 'jotai';

import { useCartQuery } from '@mryzhkova/packages-shared/apollo-client/cart';
import { Button } from '@mryzhkova/packages-shared/components/button';
import { Divider } from '@mryzhkova/packages-shared/components/divider';
import { Flex } from '@mryzhkova/packages-shared/components/flex';
import { Gap } from '@mryzhkova/packages-shared/components/gap';
import { Input } from '@mryzhkova/packages-shared/components/input';
import { LoadWrapper } from '@mryzhkova/packages-shared/components/load-wrapper';
import { Text } from '@mryzhkova/packages-shared/components/text';

import { paymentStepAtom } from '@/store';

import { PurchaseCard } from './purchase-card';

export const PaymentInfo = () => {
    const step = useAtomValue(paymentStepAtom);

    const { data, loading, error, refetch } = useCartQuery();
    const cartData = data?.getCart;

    const shipping = step === 'details' ? 'Calculated at the next step' : 'Free Shipping';

    return (
        <LoadWrapper
            loading={loading}
            error={error}
            message='Cart info loading error'
            onRetry={refetch}
        >
            {cartData && (
                <>
                    {cartData.books.map(({ id, count, info }) => (
                        <PurchaseCard
                            key={id}
                            title={info.title}
                            price={info.price}
                            count={count}
                        />
                    ))}
                    <Gap size='xs' />
                    <Flex justify='space-between'>
                        <Input size='l' placeholder='Coupon code' />
                        <Button view='gray'>Add code</Button>
                    </Flex>
                    <Gap size='2xl' />
                    <Divider />
                    <Gap size='2xl' />
                    <Flex justify='space-between'>
                        <Text weight='regular' view='secondary'>
                            Subtotal
                        </Text>
                        <Text weight='regular' view='secondary'>
                            $ {cartData.cost}
                        </Text>
                    </Flex>
                    <Gap size='xl' />
                    <Flex justify='space-between'>
                        <Text weight='regular' view='secondary'>
                            Shipping
                        </Text>
                        <Text weight='regular' view='secondary'>
                            {shipping}
                        </Text>
                    </Flex>
                    <Gap size='2xl' />
                    <Divider />
                    <Gap size='2xl' />
                    <Flex justify='space-between' align='center'>
                        <Text weight='regular' view='secondary'>
                            Total
                        </Text>
                        <Text view='secondary' size='2xl'>
                            $ {cartData.cost}
                        </Text>
                    </Flex>
                </>
            )}
        </LoadWrapper>
    );
};

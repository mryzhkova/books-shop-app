import { useAtomValue, useSetAtom } from 'jotai';

import { Button } from '@mryzhkova/packages-shared/components/button';
import { Flex } from '@mryzhkova/packages-shared/components/flex';
import { Gap } from '@mryzhkova/packages-shared/components/gap';
import { Radio } from '@mryzhkova/packages-shared/components/radio';
import { Text } from '@mryzhkova/packages-shared/components/text';

import { paymentFormAtom, paymentStepAtom } from '@/store';

import { DetailsCard } from '../details-card';

export const ShippingStep = () => {
    const setStep = useSetAtom(paymentStepAtom);
    const paymentInfo = useAtomValue(paymentFormAtom);

    const { email, country, city, postalCode } = paymentInfo;
    const address = `${country}, ${city}, ${postalCode}`;

    const handleSetPaymentStep = () => {
        setStep('payment');
    };

    const handleSetDetailsStep = () => {
        setStep('details');
    };

    return (
        <>
            <Gap size='6xl' />
            <DetailsCard contact={email} address={address} />
            <Gap size='6xl' />
            <Text tag='p' size='l' view='secondary'>
                Shipping method
            </Text>
            <Gap size='l' />
            <Radio
                value='Standard Shipping'
                label='Standard Shipping'
                addon='Free'
                border
                defaultChecked
            />
            <Gap size='8xl' />
            <Flex align='center' justify='space-between'>
                <Button view='link' onClick={handleSetDetailsStep}>
                    Back to details
                </Button>
                <Button onClick={handleSetPaymentStep}>Go to payment</Button>
            </Flex>
        </>
    );
};

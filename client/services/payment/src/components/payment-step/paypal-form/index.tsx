import {
    PayPalNameField,
    PayPalNumberField,
    PayPalExpiryField,
    PayPalCVVField,
    usePayPalCardFields,
} from '@paypal/react-paypal-js';
import { useSetAtom } from 'jotai';

import { Button } from '@mryzhkova/packages-shared/components/button';
import { Flex } from '@mryzhkova/packages-shared/components/flex';
import { Gap } from '@mryzhkova/packages-shared/components/gap';
import { SVGIcon } from '@mryzhkova/packages-shared/components/svg-icon';
import { Text } from '@mryzhkova/packages-shared/components/text';

import CardIcon from '@/assets/credit-card.svg';
import { paymentStepAtom } from '@/store';

import { OptionalInfo } from './optional-info';
import { StyledCardHeader, StyledPaymentCard, StyledPaymentCardBody } from './styled';

type Props = {
    paymentLoading?: boolean;
};

export const PayPalForm = ({ paymentLoading }: Props) => {
    const setStep = useSetAtom(paymentStepAtom);
    const { cardFieldsForm } = usePayPalCardFields();

    const handleSubmit = async () => {
        await cardFieldsForm?.submit();
    };

    const handleSetShippingStep = () => {
        setStep('shipping');
    };

    return (
        <>
            <StyledPaymentCard>
                <StyledCardHeader>
                    <SVGIcon Icon={CardIcon} color='accent' />
                    <Gap size='l' direction='horizontal' />
                    <Text view='secondary' weight='bold' color='accent'>
                        Credit Card
                    </Text>
                </StyledCardHeader>
                <StyledPaymentCardBody>
                    <PayPalNumberField placeholder='Card Number' />
                    <PayPalNameField placeholder='Holder Name' />
                    <PayPalCVVField placeholder='CVV' />
                    <PayPalExpiryField placeholder='Expiration (MM/YY)' />
                </StyledPaymentCardBody>
            </StyledPaymentCard>
            <OptionalInfo />
            <Flex align='center' justify='space-between'>
                <Button view='link' onClick={handleSetShippingStep}>
                    Back to shipping
                </Button>
                <Button disabled={paymentLoading} onClick={handleSubmit}>
                    Pay now
                </Button>
            </Flex>
        </>
    );
};

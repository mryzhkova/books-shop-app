import { PayPalCardFieldsProvider, PayPalScriptProvider } from '@paypal/react-paypal-js';
import { useAtomValue } from 'jotai';

import { useGenerateClientToken } from '@mryzhkova/packages-shared/apollo-client/payment';
import { Gap } from '@mryzhkova/packages-shared/components/gap';
import { LoadWrapper } from '@mryzhkova/packages-shared/components/load-wrapper';
import { Text } from '@mryzhkova/packages-shared/components/text';

import { usePayPalPayment } from '@/hooks/use-paypal-payment';
import { paymentFormAtom } from '@/store';

import { DetailsCard } from '../details-card';

import { PayPalForm } from './paypal-form';
import { cardStyle } from './styles';

export const PaymentStep = () => {
    const { email, country, city, postalCode } = useAtomValue(paymentFormAtom);
    const address = `${country}, ${city}, ${postalCode}`;

    const { data, loading, error, refetch } = useGenerateClientToken();
    const tokens = data?.generateClientToken;

    const { handleCreateOrder, handleApprove, handleError, paymentLoading } = usePayPalPayment();

    return (
        <LoadWrapper
            loading={loading}
            error={error}
            message='PayPal loading error'
            onRetry={refetch}
        >
            <PayPalScriptProvider
                options={{
                    clientId: tokens?.clientId ?? '',
                    dataClientToken: tokens?.clientToken,
                    components: 'card-fields',
                }}
            >
                <PayPalCardFieldsProvider
                    createOrder={handleCreateOrder}
                    onApprove={handleApprove}
                    onError={handleError}
                    style={cardStyle}
                >
                    <Gap size='6xl' />
                    <DetailsCard
                        contact={email}
                        address={address}
                        shipping='Standard Shipping - FREE'
                    />
                    <Gap size='3xl' />
                    <Text tag='p' size='l' view='secondary'>
                        Payment method
                    </Text>
                    <Gap size='l' />
                    <PayPalForm paymentLoading={paymentLoading} />
                </PayPalCardFieldsProvider>
            </PayPalScriptProvider>
        </LoadWrapper>
    );
};

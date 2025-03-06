import { useAtomValue } from 'jotai';
import { useNavigate } from 'react-router-dom';

import { Container } from '@mryzhkova/packages-shared/components/container';
import { ErrorBoundary } from '@mryzhkova/packages-shared/components/error-boundary';
import { Gap } from '@mryzhkova/packages-shared/components/gap';
import { PageError } from '@mryzhkova/packages-shared/components/page-error';
import { getCartData } from '@mryzhkova/packages-shared/utils/cart/get-cart-data';

import { stepViewMapper } from '@/constants';
import { paymentStepAtom } from '@/store';

import { PaymentInfo } from '../payment-info';
import { StepsNavigation } from '../steps-navigation';

import { StyledBackground, StyledPaymentApp } from './styled';

export const PaymentApp = () => {
    const navigate = useNavigate();
    const { currentBooks } = getCartData();

    const step = useAtomValue(paymentStepAtom);
    const PaymentStepView = stepViewMapper[step];

    const handleBack = () => {
        navigate('/');
    };

    if (!currentBooks?.length) {
        return <PageError message='Payment not available' onClick={handleBack} />;
    }

    return (
        <ErrorBoundary fallback={<PageError message='Payment Service Error' />}>
            <StyledBackground>
                <Container>
                    <Gap size='6xl' />
                    <StyledPaymentApp>
                        <Container width={445}>
                            <StepsNavigation />
                            <PaymentStepView />
                        </Container>
                        <Container width={445}>
                            <PaymentInfo />
                        </Container>
                    </StyledPaymentApp>
                    <Gap size='6xl' />
                </Container>
            </StyledBackground>
        </ErrorBoundary>
    );
};

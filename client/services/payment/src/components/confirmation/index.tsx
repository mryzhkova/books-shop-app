import { useAtomValue } from 'jotai';
import { Navigate, useNavigate } from 'react-router';

import { Button } from '@mryzhkova/packages-shared/components/button';
import { Container } from '@mryzhkova/packages-shared/components/container';
import { Flex } from '@mryzhkova/packages-shared/components/flex';
import { Gap } from '@mryzhkova/packages-shared/components/gap';
import { SVGIcon } from '@mryzhkova/packages-shared/components/svg-icon';
import { Text } from '@mryzhkova/packages-shared/components/text';

import CheckCircle from '@/assets/check-circle.svg';
import { paymentOrderAtom } from '@/store';

export const Confirmation = () => {
    const navigate = useNavigate();

    const order = useAtomValue(paymentOrderAtom);

    const handleBack = () => {
        navigate('/');
    };

    if (!order) {
        return <Navigate to='/' replace />;
    }

    return (
        <Container width={540}>
            <Gap size='6xl' />
            <Flex direction='column' align='center'>
                <SVGIcon Icon={CheckCircle} color='accent' />
                <Gap size='2xl' />
                <Text size='3xl'>Payment Confirmed</Text>
                <Gap size='xs' />
                <Text size='s' weight='regular' color='accent'>
                    {`ORDER #${order}`}
                </Text>
                <Gap size='2xl' />
                <Text size='s' weight='regular'>
                    Thank you Joe for buying Candleaf. The nature is grateful to you. Now that your
                    order is confirmed it will be ready to ship in 2 days. Please check your inbox
                    in the future for your order updates.
                </Text>
                <Gap size='2xl' />
                <Button onClick={handleBack}>Back to shopping</Button>
                <Gap size='2xl' />
                <Button view='link'>Print receipt</Button>
            </Flex>
            <Gap size='6xl' />
        </Container>
    );
};

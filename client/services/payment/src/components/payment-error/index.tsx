import { Navigate, useLocation, useNavigate } from 'react-router';

import { Button } from '@mryzhkova/packages-shared/components/button';
import { Container } from '@mryzhkova/packages-shared/components/container';
import { Flex } from '@mryzhkova/packages-shared/components/flex';
import { Gap } from '@mryzhkova/packages-shared/components/gap';
import { SVGIcon } from '@mryzhkova/packages-shared/components/svg-icon';
import { Text } from '@mryzhkova/packages-shared/components/text';

import ErrorCircle from '@/assets/error-circle.svg';

export const PaymentError = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleBack = () => {
        navigate('/');
    };

    if (!location.state?.fromApp) {
        return <Navigate to='/' replace />;
    }

    return (
        <Container width={540}>
            <Gap size='6xl' />
            <Flex direction='column' align='center'>
                <SVGIcon Icon={ErrorCircle} color='error' />

                <Gap size='2xl' />
                <Text size='3xl'>Payment error</Text>
                <Text size='s' weight='regular'>
                    Try again later
                </Text>
                <Gap size='2xl' />
                <Button onClick={handleBack}>Back to shopping</Button>
                <Gap size='2xl' />
            </Flex>
            <Gap size='6xl' />
        </Container>
    );
};

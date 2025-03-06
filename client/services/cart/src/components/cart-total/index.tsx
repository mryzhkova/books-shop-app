import { useNavigate } from 'react-router-dom';

import { Button } from '@mryzhkova/packages-shared/components/button';
import { Gap } from '@mryzhkova/packages-shared/components/gap';
import { Text } from '@mryzhkova/packages-shared/components/text';
import { paymentRoutes } from '@mryzhkova/packages-shared/constants';

import { StyledCartFooter, StyledFooterContent, StyledSubTotal } from './styled';

type Props = {
    total: number;
};

export const CartTotal = ({ total }: Props) => {
    const navigate = useNavigate();

    const handleCheckOut = () => {
        navigate(paymentRoutes.payment);
    };

    return (
        <StyledCartFooter>
            <StyledFooterContent>
                <StyledSubTotal>
                    <Text size='xl' view='secondary'>
                        Sub-total
                    </Text>
                    <Gap size='5xl' direction='horizontal' />
                    <Text size='xl' view='secondary'>
                        {`$ ${total}`}
                    </Text>
                </StyledSubTotal>
                <Gap size='m' />
                <Text weight='light' view='secondary' tag='p'>
                    Tax and shipping cost will be calculated later
                </Text>
            </StyledFooterContent>
            <Gap size='5xl' direction='horizontal' />
            <Button onClick={handleCheckOut}>Check-out</Button>
        </StyledCartFooter>
    );
};

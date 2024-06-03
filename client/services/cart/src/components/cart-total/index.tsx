import { Button } from '@mryzhkova/packages-shared/components/button';
import { Gap } from '@mryzhkova/packages-shared/components/gap';
import { Text } from '@mryzhkova/packages-shared/components/text';

import { CartFooter, StyledSubTotal } from './styled';

type Props = {
    total: string;
};

export const CartTotal = ({ total }: Props) => {
    const handleCheckOut = () => {};

    return (
        <CartFooter>
            <div>
                <StyledSubTotal>
                    <Text size='xl' view='secondary'>
                        Sub-total
                    </Text>
                    <Gap size='5xl' direction='horizontal' />
                    <Text size='xl' view='secondary'>
                        {total}
                    </Text>
                </StyledSubTotal>
                <Gap size='m' />
                <Text weight='light' view='secondary' tag='p'>
                    Tax and shipping cost will be calculated later
                </Text>
            </div>
            <Gap size='5xl' direction='horizontal' />
            <Button onClick={handleCheckOut}>Check-out</Button>
        </CartFooter>
    );
};

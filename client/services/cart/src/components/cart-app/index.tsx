import { NavLink } from 'react-router-dom';

import { Gap } from '@mryzhkova/packages-shared/components/gap';
import { Link } from '@mryzhkova/packages-shared/components/link';
import { Text } from '@mryzhkova/packages-shared/components/text';

import { CartList } from '../cart-list';

import { StyledCart } from './styled';

export const CartApp = () => (
    <StyledCart>
        <Gap size='7xl' />
        <Text size='3xl' align='center' tag='p'>
            Your cart items
        </Text>
        <Gap size='3xl' />
        <Link Component={NavLink} to='/' color='accent' underline>
            <Text size='l' align='center' tag='p' view='secondary' color='accent' weight='regular'>
                Back to shopping
            </Text>
        </Link>
        <Gap size='7xl' />
        <CartList />
        <Gap size='8xl' />
    </StyledCart>
);

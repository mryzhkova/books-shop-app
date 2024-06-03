import { useCartQuery } from '@mryzhkova/packages-shared/api/cart';
import { Gap } from '@mryzhkova/packages-shared/components/gap';
import { Text } from '@mryzhkova/packages-shared/components/text';

import { getCartTotal } from '@/utils/get-cart-total';

import { CartLine } from '../cart-line';
import { CartTotal } from '../cart-total';

import { CartItem } from './cart-item';
import { ListHeader } from './styled';

export const CartList = () => {
    const { data, loading, error } = useCartQuery();
    const books = data?.getCart.books;

    if (loading) {
        return (
            <>
                <Text tag='h3' size='6xl' align='center'>
                    Cart items loading...
                </Text>
                <Gap size='6xl' />
            </>
        );
    }

    if (error) {
        return (
            <>
                <Text tag='h3' size='6xl' align='center'>
                    Cart items loading error
                </Text>
                <Gap size='6xl' />
            </>
        );
    }

    if (!books?.length) {
        return (
            <>
                <Text tag='h3' size='6xl' align='center'>
                    Your cart is empty
                </Text>
                <Gap size='6xl' />
            </>
        );
    }

    const total = getCartTotal(books);

    return (
        <>
            <ListHeader>
                <Text view='secondary'>Product</Text>
                <Text view='secondary'>Price</Text>
                <Text view='secondary' align='center'>
                    Quantity
                </Text>
                <Text view='secondary' align='right'>
                    Total
                </Text>
            </ListHeader>
            <Gap size='xl' />
            <CartLine />
            {books.map(({ id, info, count }) => (
                <CartItem key={id} id={id} title={info.title} price={info.price} count={count} />
            ))}
            <Gap size='4xl' />
            <CartTotal total={total} />
        </>
    );
};

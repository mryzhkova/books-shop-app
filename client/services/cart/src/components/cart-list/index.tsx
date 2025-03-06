import { useCartQuery } from '@mryzhkova/packages-shared/apollo-client/cart';
import { Divider } from '@mryzhkova/packages-shared/components/divider';
import { Gap } from '@mryzhkova/packages-shared/components/gap';
import { LoadWrapper } from '@mryzhkova/packages-shared/components/load-wrapper';
import { Text } from '@mryzhkova/packages-shared/components/text';

import { CartTotal } from '../cart-total';

import { CartItem } from './cart-item';
import { StyledListHeader } from './styled';

export const CartList = () => {
    const { data, loading, error, refetch } = useCartQuery();
    const cartData = data?.getCart;

    return (
        <LoadWrapper
            loading={loading}
            error={error}
            message='Cart items loading error'
            onRetry={refetch}
        >
            {cartData?.books?.length ? (
                <>
                    <StyledListHeader>
                        <Text view='secondary'>Product</Text>
                        <Text view='secondary'>Price</Text>
                        <Text view='secondary' align='center'>
                            Quantity
                        </Text>
                        <Text view='secondary' align='right'>
                            Total
                        </Text>
                    </StyledListHeader>
                    <Gap size='xl' />
                    <Divider />
                    {cartData.books.map(({ id, info, count }) => (
                        <CartItem
                            key={id}
                            id={id}
                            title={info.title}
                            price={info.price}
                            count={count}
                        />
                    ))}
                    <Gap size='4xl' />
                    <CartTotal total={cartData.cost} />
                </>
            ) : (
                <>
                    <Text tag='h3' size='6xl' align='center'>
                        Your cart is empty
                    </Text>
                    <Gap size='8xl' />
                </>
            )}
        </LoadWrapper>
    );
};

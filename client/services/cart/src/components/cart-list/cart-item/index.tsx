import { Button } from '@mryzhkova/packages-shared/components/button';
import { Gap } from '@mryzhkova/packages-shared/components/gap';
import { Text } from '@mryzhkova/packages-shared/components/text';

import CartItemImage from '@/assets/cart-item.png';
import { CartLine } from '@/components/cart-line';
import { useHandleCart } from '@/hooks/use-handle-cart';
import { getBookTotal } from '@/utils/get-book-total';

import {
    ProductCell,
    ProductInfo,
    StyledCartItem,
    ProductImage,
    TotalCell,
    PriceCell,
    CountCell,
    StyledCounter,
} from './styled';

type Props = {
    id: string;
    title: string;
    price: number;
    count: number;
    cover?: string;
};

export const CartItem = ({ title, price, count, cover, id }: Props) => {
    const {
        handleRemoveFromCart,
        removeLoading,
        updateLoading,
        handleIncreaseCount,
        handleDecreaseCount,
    } = useHandleCart(id, count);

    const total = getBookTotal(price, count);

    return (
        <>
            <StyledCartItem>
                <ProductCell>
                    <ProductImage src={cover || CartItemImage} alt='cart item image' />
                    <ProductInfo>
                        <Text size='3xl'>{title}</Text>
                        <Gap size='m' />
                        <Button
                            view='ghost'
                            onClick={handleRemoveFromCart}
                            disabled={removeLoading}
                        >
                            <Text size='l' weight='regular' color='accent' view='secondary'>
                                Remove
                            </Text>
                        </Button>
                    </ProductInfo>
                </ProductCell>
                <PriceCell>
                    <Text size='l' view='secondary'>
                        {`$ ${price}`}
                    </Text>
                </PriceCell>
                <CountCell>
                    <StyledCounter>
                        <Button
                            view='ghost'
                            block
                            onClick={handleIncreaseCount}
                            disabled={updateLoading}
                        >
                            <Text size='l' weight='regular' color='accent' view='secondary'>
                                +
                            </Text>
                        </Button>
                        <Gap size='s' direction='horizontal' />
                        <Text view='secondary'>{count}</Text>
                        <Gap size='s' direction='horizontal' />
                        <Button
                            view='ghost'
                            block
                            disabled={count === 1 || updateLoading}
                            onClick={handleDecreaseCount}
                        >
                            <Text size='l' weight='regular' color='accent' view='secondary'>
                                -
                            </Text>
                        </Button>
                    </StyledCounter>
                </CountCell>
                <TotalCell>
                    <Text size='l' view='secondary'>
                        {total}
                    </Text>
                </TotalCell>
            </StyledCartItem>
            <CartLine />
        </>
    );
};

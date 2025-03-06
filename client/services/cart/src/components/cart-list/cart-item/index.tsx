import { Button } from '@mryzhkova/packages-shared/components/button';
import { Divider } from '@mryzhkova/packages-shared/components/divider';
import { Flex } from '@mryzhkova/packages-shared/components/flex';
import { Gap } from '@mryzhkova/packages-shared/components/gap';
import { Text } from '@mryzhkova/packages-shared/components/text';

import CartItemImage from '@/assets/cart-item.png';
import { useHandleCart } from '@/hooks/use-handle-cart';
import { getBookTotal } from '@/utils/get-book-total';

import { StyledCartItem, StyledProductImage, StyledCounter } from './styled';

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
                <Flex>
                    <StyledProductImage src={cover || CartItemImage} alt='cart item image' />
                    <Gap size='4xl' direction='horizontal' />
                    <Flex direction='column' align='flex-start'>
                        <Gap size='2xl' />
                        <Text size='3xl'>{title}</Text>
                        <Gap size='m' />
                        <Button
                            view='accent-text'
                            onClick={handleRemoveFromCart}
                            disabled={removeLoading}
                        >
                            Remove
                        </Button>
                        <Gap size='2xl' />
                    </Flex>
                </Flex>
                <Flex align='center'>
                    <Text size='l' view='secondary'>
                        {`$ ${price}`}
                    </Text>
                </Flex>
                <Flex align='center' justify='center'>
                    <StyledCounter>
                        <Button
                            view='accent-text'
                            block
                            onClick={handleIncreaseCount}
                            disabled={updateLoading}
                        >
                            +
                        </Button>
                        <Gap size='s' direction='horizontal' />
                        <Text view='secondary'>{count}</Text>
                        <Gap size='s' direction='horizontal' />
                        <Button
                            view='accent-text'
                            block
                            disabled={count === 1 || updateLoading}
                            onClick={handleDecreaseCount}
                        >
                            -
                        </Button>
                    </StyledCounter>
                </Flex>
                <Flex align='center' justify='center'>
                    <Text size='l' view='secondary'>
                        {total}
                    </Text>
                </Flex>
            </StyledCartItem>
            <Divider />
        </>
    );
};

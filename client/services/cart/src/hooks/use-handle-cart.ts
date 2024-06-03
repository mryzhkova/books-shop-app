import { useAddToCartMore, useRemoveFromCart } from '@mryzhkova/packages-shared/api/cart';
import { setCartData } from '@mryzhkova/packages-shared/utils/cart/set-cart-data';

export const useHandleCart = (id: string, count: number) => {
    const [removeFromCart, { loading: removeLoading }] = useRemoveFromCart(id);
    const [updateCount, { loading: updateLoading }] = useAddToCartMore(id);

    const handleRemoveFromCart = async () => {
        const cart = (await removeFromCart()).data?.removeFromCart;

        if (cart) {
            setCartData(cart.id, cart.books);
        }
    };

    const handleIncreaseCount = async () => {
        const cart = (await updateCount({ variables: { count: count + 1 } })).data?.addToCartMore;

        if (cart) {
            setCartData(cart.id, cart.books);
        }
    };

    const handleDecreaseCount = async () => {
        const cart = (await updateCount({ variables: { count: count - 1 } })).data?.addToCartMore;

        if (cart) {
            setCartData(cart.id, cart.books);
        }
    };

    return {
        removeLoading,
        updateLoading,
        handleRemoveFromCart,
        handleIncreaseCount,
        handleDecreaseCount,
    };
};

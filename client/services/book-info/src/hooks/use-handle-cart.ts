import { useCallback, useEffect, useState } from 'react';

import { useAddToCart, useCreateCart } from '@mryzhkova/packages-shared/apollo-client/cart';
import { type Cart } from '@mryzhkova/packages-shared/apollo-client/cart/types';
import { getCartData } from '@mryzhkova/packages-shared/utils/cart/get-cart-data';
import { setCartData } from '@mryzhkova/packages-shared/utils/cart/set-cart-data';

export const useHandleCart = (id: string) => {
    const [createCart, { data: crateCartData }] = useCreateCart(id);
    const [addToCart, { data: addToCartData }] = useAddToCart(id);

    const { cartId, currentBooks } = getCartData();
    const cartBook = currentBooks?.includes(id);

    const [disabled, setDisabled] = useState(cartBook);
    const [btnText, setBtnText] = useState(cartBook ? 'In cart' : '+ Add to cart');

    const handleAddToCart = () => {
        if (cartId) {
            addToCart({ variables: { id: cartId } });
        } else {
            createCart();
        }
        setDisabled(true);
    };

    const handleCartData = useCallback((cart: Cart) => {
        setCartData(cart.id, cart.books);
        setBtnText('In cart');
    }, []);

    useEffect(() => {
        if (crateCartData) {
            handleCartData(crateCartData.createCart);
        }
    }, [crateCartData, handleCartData]);

    useEffect(() => {
        if (addToCartData) {
            handleCartData(addToCartData.addToCart);
        }
    }, [addToCartData, handleCartData]);

    return {
        handleAddToCart,
        btnText,
        disabled,
    };
};

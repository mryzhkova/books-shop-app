import { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import { Gap } from '@mryzhkova/packages-shared/components/gap';
import { IconButton } from '@mryzhkova/packages-shared/components/icon-button';
import { Link } from '@mryzhkova/packages-shared/components/link';
import { SVGIcon } from '@mryzhkova/packages-shared/components/svg-icon';
import { Text } from '@mryzhkova/packages-shared/components/text';
import { getCartData } from '@mryzhkova/packages-shared/utils/cart/get-cart-data';
import { getEventBus } from '@mryzhkova/packages-shared/utils/event-bus';
import { HeaderConfig } from '@mryzhkova/packages-shared/utils/event-bus/types';

import BooksIcon from '@/assets/icons/books.svg';
import CartIcon from '@/assets/icons/cart.svg';
import ChevronIcon from '@/assets/icons/chevron.svg';
import UserIcon from '@/assets/icons/user.svg';

import { HeaderWrapper, HeaderLine, NavWrapper } from './styled';

export const Header = () => {
    const navigate = useNavigate();

    const { currentBooks } = getCartData();
    const [withAddon, setWithAddon] = useState(!!currentBooks?.length);

    const handleOpneCart = () => {
        navigate('/cart');
    };

    useEffect(() => {
        const eventBus = getEventBus();

        const handleAddon = ({ activeCart }: HeaderConfig) => {
            setWithAddon(activeCart);
        };

        if (eventBus) {
            eventBus.subscribe('CHANGE_HEADER_CONFIG', handleAddon);
        }

        return () => {
            if (eventBus) {
                eventBus.unsubscribe('CHANGE_HEADER_CONFIG', handleAddon);
            }
        };
    }, []);

    return (
        <>
            <HeaderWrapper>
                <Link to='/' Component={NavLink}>
                    <SVGIcon Icon={BooksIcon} />
                </Link>
                <NavWrapper>
                    <Link to='/' Component={NavLink}>
                        <Text view='secondary'>Discovery</Text>
                        <Gap size='xs' direction='horizontal' />
                        <SVGIcon Icon={ChevronIcon} />
                    </Link>
                    <Gap size='4xl' direction='horizontal' />
                    <Link to='/' Component={NavLink}>
                        <Text view='secondary'>About</Text>
                    </Link>
                    <Gap size='4xl' direction='horizontal' />
                    <Link to='/' Component={NavLink}>
                        <Text view='secondary'>Contact us</Text>
                    </Link>
                </NavWrapper>
                <div>
                    <IconButton Icon={UserIcon} onClick={() => {}} />
                    <Gap size='l' direction='horizontal' />
                    <IconButton Icon={CartIcon} onClick={handleOpneCart} withAddon={withAddon} />
                </div>
            </HeaderWrapper>
            <HeaderLine />
        </>
    );
};

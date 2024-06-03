import { Outlet } from 'react-router-dom';

import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { useEventBus } from '@/hooks/use-event-bus';

export const Layout = () => {
    useEventBus();

    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};

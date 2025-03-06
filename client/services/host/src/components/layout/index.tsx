import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import { ErrorBoundary } from '@mryzhkova/packages-shared/components/error-boundary';

import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { useEventBus } from '@/hooks/use-event-bus';

export const Layout = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [location.pathname]);

    useEventBus();

    return (
        <ErrorBoundary fallback={<div>Service Error</div>}>
            <Header />
            <Outlet />
            <Footer />
        </ErrorBoundary>
    );
};

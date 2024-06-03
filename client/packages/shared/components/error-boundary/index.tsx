import React, { ReactNode } from 'react';

type State = {
    hasError: boolean;
};

type Props = {
    fallback: ReactNode;
    children: ReactNode;
};

class ErrorBoundary extends React.Component<Props, State> {
    state = { hasError: false };

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error: Error) {
        console.error(error);
    }

    render() {
        const { hasError } = this.state;
        const { fallback, children } = this.props;

        if (hasError) {
            return fallback;
        }

        return children;
    }
}

export { ErrorBoundary };

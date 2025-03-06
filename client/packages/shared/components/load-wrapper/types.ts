import { type ApolloError } from '@apollo/client';
import { type ReactNode } from 'react';

export type LoadWrapperProps = {
    children: ReactNode;
    loading?: boolean;
    error?: ApolloError;
    message?: string;
    onRetry: () => void;
};

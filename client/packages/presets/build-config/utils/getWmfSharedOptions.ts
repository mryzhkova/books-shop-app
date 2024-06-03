import { Dependencie } from '../types';

export const getWmfSharedOptions = (deps: Dependencie) => ({
    ...deps,
    react: {
        requiredVersion: deps.react,
        singleton: true,
        eager: true,
    },
    'react-router-dom': {
        requiredVersion: deps['react-router-dom'],
        singleton: true,
        eager: true,
    },
    'react-dom': {
        requiredVersion: deps['react-dom'],
        singleton: true,
        eager: true,
    },
    'styled-components': {
        requiredVersion: deps['styled-components'],
        singleton: true,
        eager: true,
    },
    '@apollo/client': {
        requiredVersion: deps['@apollo/client'],
        singleton: true,
        eager: true,
    },
});

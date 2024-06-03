import path from 'path';

import { type Configuration, container } from 'webpack';

import {
    type EnvVariables,
    type BuildPaths,
    getWebpackConfig,
    getWmfSharedOptions,
} from '@mryzhkova/packages-presets/build-config';

import { dependencies } from './package.json';

export default (env: EnvVariables) => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        output: path.resolve(__dirname, 'gcloud-build/build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
        public: '/',
    };

    const config: Configuration = getWebpackConfig({
        paths,
        mode: env.mode ?? 'development',
        port: env.port ?? 3000,
        analyzer: env.analyzer,
    });

    const isDev = env.mode === 'development';
    const bookInfoUrl = isDev
        ? 'http://localhost:3001'
        : 'https://book-info-app-dot-books-shop-5230c.uc.r.appspot.com';
    const cartUrl = isDev
        ? 'http://localhost:3002'
        : 'https://cart-dot-books-shop-5230c.uc.r.appspot.com';

    config?.plugins?.push(
        new container.ModuleFederationPlugin({
            name: 'host',
            filename: 'remoteEntry.js',
            remotes: {
                bookInfo: `bookInfo@${bookInfoUrl}/remoteEntry.js`,
                cart: `cart@${cartUrl}/remoteEntry.js`,
            },
            shared: getWmfSharedOptions(dependencies),
        }),
    );

    return config;
};

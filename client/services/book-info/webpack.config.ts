import path from 'path';

import webpack from 'webpack';

import {
    type EnvVariables,
    type BuildPaths,
    getWebpackConfig,
    getWmfSharedOptions,
} from '@mryzhkova/packages-presets/build-config';

import { dependencies } from './package.json';

export default (env: EnvVariables) => {
    const paths: BuildPaths = {
        output: path.resolve(__dirname, 'gcloud-build/build'),
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
        public: 'auto',
    };

    const config: webpack.Configuration = getWebpackConfig({
        port: env.port ?? 3001,
        mode: env.mode ?? 'development',
        paths,
        analyzer: env.analyzer,
    });

    config?.plugins?.push(
        new webpack.container.ModuleFederationPlugin({
            name: 'bookInfo',
            filename: 'remoteEntry.js',
            exposes: {
                './Router': './src/Router.tsx',
            },
            shared: getWmfSharedOptions(dependencies),
        }),
    );

    return config;
};

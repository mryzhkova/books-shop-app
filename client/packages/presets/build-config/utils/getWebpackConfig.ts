import { type Configuration } from 'webpack';

import { type BuildOptions } from '../types';

import { getDevServer } from './getDevServer';
import { getLoaders } from './getLoaders';
import { getPlugins } from './getPlugins';
import { getResolvers } from './getResolvers';

export const getWebpackConfig = (options: BuildOptions): Configuration => {
    const { mode, paths } = options;
    const dev = mode === 'development';

    return {
        mode,
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.output,
            clean: true,
            publicPath: paths.public,
        },
        plugins: getPlugins(options),
        module: {
            rules: getLoaders(),
        },
        resolve: getResolvers(options),
        devtool: dev ? 'inline-source-map' : undefined,
        devServer: dev ? getDevServer(options) : undefined,
    };
};

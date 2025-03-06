import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import { ProgressPlugin, type WebpackPluginInstance, DefinePlugin } from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

import { type BuildOptions } from '../types';

export const getPlugins = ({ paths, mode, analyzer }: BuildOptions): WebpackPluginInstance[] => {
    const plugins: WebpackPluginInstance[] = [
        new HTMLWebpackPlugin({
            template: paths.html,
            publicPath: '/',
        }),
        new DefinePlugin({
            __ENV__: JSON.stringify(mode),
        }),
    ];

    if (mode === 'development') {
        plugins.push(new ReactRefreshWebpackPlugin());
        plugins.push(new ProgressPlugin());
    }

    if (analyzer) {
        plugins.push(new BundleAnalyzerPlugin({ openAnalyzer: false }));
    }

    return plugins;
};

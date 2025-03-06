import { type BuildOptions } from '../types';

import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';

export const getDevServer = ({ port }: BuildOptions): DevServerConfiguration => ({
    port,
    open: true,
    historyApiFallback: true,
    hot: true,
});

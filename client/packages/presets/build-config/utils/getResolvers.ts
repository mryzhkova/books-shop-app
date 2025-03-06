import { type ResolveOptions } from 'webpack';

import { type BuildOptions } from '../types';

export const getResolvers = ({ paths }: BuildOptions): ResolveOptions => ({
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [paths.src, 'node_modules'],
    mainFiles: ['index'],
    alias: {
        '@': paths.src,
    },
});

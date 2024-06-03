export type Mode = 'production' | 'development';

export type BuildPaths = {
    entry: string;
    output: string;
    html: string;
    public: string;
    src: string;
};

export type BuildOptions = {
    port: number;
    paths: BuildPaths;
    mode: Mode;
    analyzer?: boolean;
};

export type EnvVariables = {
    mode?: Mode;
    analyzer?: boolean;
    port?: number;
};

export type Dependencie = Record<string, string>;

import { type HTMLAttributes } from 'react';

export type Option = {
    id: string;
    content: string;
};

export type SelectProps = HTMLAttributes<HTMLDivElement> & {
    options: Option[];
    value: string;
    label: string;
    placeholder: string;
    error?: string;
    onChange: (value: string) => void;
};

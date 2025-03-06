import { type InputHTMLAttributes } from 'react';

export type InputSize = 's' | 'm' | 'l' | 'xl' | 'block';

export type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'value'> & {
    value?: string;
    size?: InputSize;
    error?: string;
};

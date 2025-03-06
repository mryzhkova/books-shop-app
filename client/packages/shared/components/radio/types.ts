import { type ChangeEvent, type InputHTMLAttributes } from 'react';

export type RadioProps = InputHTMLAttributes<HTMLInputElement> & {
    value?: string;
    label?: string;
    checked?: boolean;
    name?: string;
    addon?: string;
    border?: boolean;
    onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
};

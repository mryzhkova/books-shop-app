import { type InputHTMLAttributes } from 'react';

export type CheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
    checked?: boolean;
    label?: string;
};

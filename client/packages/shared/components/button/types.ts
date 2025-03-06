import { type ReactNode, type ButtonHTMLAttributes } from 'react';

export type ButtonView =
    | 'gray'
    | 'accent'
    | 'accent-light'
    | 'accent-text'
    | 'text-default'
    | 'text-secondary'
    | 'text-primary'
    | 'link';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode;
    view?: ButtonView;
    block?: boolean;
};

export type StyledButtonProps = Omit<ButtonProps, 'children'>;

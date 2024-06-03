import { ReactNode, ButtonHTMLAttributes } from 'react';

export type ButtonView = 'gray' | 'accent' | 'ghost' | 'light';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    view?: ButtonView;
    block?: boolean;
}

export type StyledButtonProps = Omit<ButtonProps, 'children' | 'block'> & {
    width: string;
};

import { forwardRef } from 'react';

import { StyledInput, StyledError } from './styled';
import { type InputProps } from './types';

export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ size, error, value, ...props }, ref) => (
        <div>
            <StyledInput ref={ref} value={value} error={error} size={size} {...props} />
            <StyledError>{error}</StyledError>
        </div>
    ),
);

import { forwardRef } from 'react';

import { StyledCheckbox, StyledLabel } from './styled';
import { type CheckboxProps } from './types';

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
    ({ checked, label, ...props }, ref) => (
        <StyledLabel>
            <StyledCheckbox ref={ref} type='checkbox' checked={checked} {...props} />
            {label}
        </StyledLabel>
    ),
);

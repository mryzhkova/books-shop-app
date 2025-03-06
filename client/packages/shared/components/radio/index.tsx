import { StyledRadioLabel, StyledRadioInput, StyledAddon, StyledRadio } from './styled';
import { type RadioProps } from './types';

export const Radio = ({
    value,
    label,
    checked,
    name,
    addon,
    border,
    onChange,
    ...props
}: RadioProps) => (
    <StyledRadioLabel border={border}>
        <StyledRadioInput
            type='radio'
            value={value}
            checked={checked}
            name={name}
            onChange={onChange}
            {...props}
        />
        <StyledRadio />
        {label}
        <StyledAddon>{addon}</StyledAddon>
    </StyledRadioLabel>
);

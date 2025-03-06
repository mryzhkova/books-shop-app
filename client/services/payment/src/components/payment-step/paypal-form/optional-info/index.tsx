import { Gap } from '@mryzhkova/packages-shared/components/gap';
import { Input } from '@mryzhkova/packages-shared/components/input';
import { Radio } from '@mryzhkova/packages-shared/components/radio';
import { Text } from '@mryzhkova/packages-shared/components/text';

import { StyledRadioGroup } from './styled';

export const OptionalInfo = () => (
    <>
        <Gap size='3xl' />
        <Text tag='p' size='l' view='secondary'>
            Tax Informations
        </Text>
        <Gap size='l' />
        <Input size='xl' placeholder='VAT number (optional)' />
        <Gap size='s' />
        <Input size='xl' placeholder='PEC (optional)' />
        <Gap size='3xl' />
        <Text tag='p' size='l' view='secondary'>
            Billing address
        </Text>
        <Gap size='l' />
        <StyledRadioGroup>
            <Radio
                value='same'
                label='Same as the shipping address'
                name='billing'
                checked
                onChange={() => {}}
            />
            <Radio
                value='different'
                label='Use a different address for billing'
                name='billing'
                onChange={() => {}}
            />
        </StyledRadioGroup>
        <Gap size='6xl' />
    </>
);

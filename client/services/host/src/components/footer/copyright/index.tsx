import { Text } from '@mryzhkova/packages-shared/components/text';

import { StyledCopyrightBackground, StyledCopyrightContent } from './styled';

export const Copyright = () => (
    <StyledCopyrightBackground>
        <StyledCopyrightContent>
            <Text weight='light'>© All Rights Reserved.</Text>
        </StyledCopyrightContent>
    </StyledCopyrightBackground>
);

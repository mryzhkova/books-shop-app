import { Text } from '@mryzhkova/packages-shared/components/text';

import { CopyrightBackground, CopyrightContent } from './styled';

export const Copyright = () => (
    <CopyrightBackground>
        <CopyrightContent>
            <Text weight='light'>© All Rights Reserved.</Text>
        </CopyrightContent>
    </CopyrightBackground>
);

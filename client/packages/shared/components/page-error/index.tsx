import { Button } from '../button';
import { Gap } from '../gap';
import { Text } from '../text';

import { StyledPageError } from './styled';
import { type PageErrorProps } from './types';

export const PageError = ({ message, onClick }: PageErrorProps) => (
    <StyledPageError>
        <Text tag='h3' size='6xl' align='center'>
            {message}
        </Text>
        {onClick && (
            <div>
                <Gap size='l' />
                <Button onClick={onClick}>Go to shopping</Button>
            </div>
        )}
    </StyledPageError>
);

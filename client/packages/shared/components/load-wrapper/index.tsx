import { Button } from '../button';
import { Flex } from '../flex';
import { Gap } from '../gap';
import { Loader } from '../loader';
import { Text } from '../text';

import { type LoadWrapperProps } from './types';

export const LoadWrapper = ({ children, error, loading, message, onRetry }: LoadWrapperProps) => {
    const handleRetry = () => {
        onRetry();
    };

    if (loading) {
        return (
            <>
                <Gap size='8xl' />
                <Flex direction='column' align='center'>
                    <Loader />
                    <Gap size='6xl' />
                </Flex>
                <Gap size='8xl' />
            </>
        );
    }

    if (error) {
        return (
            <>
                <Gap size='8xl' />
                <Flex direction='column' align='center'>
                    <Text tag='h3' size='6xl' align='center'>
                        {message || 'Loading Error'}
                    </Text>
                    <Gap size='l' />
                    <Button onClick={handleRetry}>Retry</Button>
                </Flex>
                <Gap size='8xl' />
            </>
        );
    }

    return children;
};

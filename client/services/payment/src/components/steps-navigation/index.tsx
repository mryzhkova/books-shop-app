import { useAtom } from 'jotai';
import { Fragment, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import { Button } from '@mryzhkova/packages-shared/components/button';
import { Flex } from '@mryzhkova/packages-shared/components/flex';
import { Link } from '@mryzhkova/packages-shared/components/link';
import { SVGIcon } from '@mryzhkova/packages-shared/components/svg-icon';
import { Text } from '@mryzhkova/packages-shared/components/text';

import Сhevron from '@/assets/chevron-right.svg';
import { steps } from '@/constants';
import { paymentStepAtom } from '@/store';
import { getStepButtonView } from '@/utils/get-step-button-view';
import { getTypedEntries } from '@/utils/get-typed-entries';

import { StyledStepsNavigation } from './styled';

export const StepsNavigation = () => {
    const [currentStep, setCurrentStep] = useAtom(paymentStepAtom);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [currentStep]);

    return (
        <StyledStepsNavigation>
            <Flex gap='m' align='center'>
                <Link Component={NavLink} to='/cart'>
                    <Text view='secondary' color='accent'>
                        Cart
                    </Text>
                </Link>
                {getTypedEntries(steps).map(([step, { title, order }]) => {
                    const currentOrder = steps[currentStep].order;

                    const disabled = order >= currentOrder;
                    const view = getStepButtonView(order, currentOrder);

                    const handleChangeStep = () => {
                        setCurrentStep(step);
                    };

                    return (
                        <Fragment key={step}>
                            <SVGIcon Icon={Сhevron} />
                            <Button view={view} disabled={disabled} onClick={handleChangeStep}>
                                {title}
                            </Button>
                        </Fragment>
                    );
                })}
            </Flex>
        </StyledStepsNavigation>
    );
};

import { type ButtonView } from '@mryzhkova/packages-shared/components/button/types';

export const getStepButtonView = (stepOrder: number, currentStepOrder: number): ButtonView => {
    if (currentStepOrder === stepOrder) {
        return 'text-primary';
    }

    if (currentStepOrder > stepOrder) {
        return 'text-default';
    }

    return 'text-secondary';
};

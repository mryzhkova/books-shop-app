import { EventBus } from '@mryzhkova/packages-shared/utils/event-bus';

export const useEventBus = () => {
    if (typeof window !== 'undefined' && !window.eventBus) {
        const eventBus = new EventBus();

        window.eventBus = eventBus;
    }
};

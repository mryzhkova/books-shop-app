import { IEventBus, EventMap } from '@mryzhkova/packages-shared/utils/event-bus/types';

declare global {
    interface Window {
        eventBus: IEventBus<EventMap>;
    }
}

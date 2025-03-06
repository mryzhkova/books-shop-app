import { type EventMap, type IEventBus } from '../utils/event-bus/types';

declare global {
    interface Window {
        eventBus: IEventBus<EventMap>;
    }
}

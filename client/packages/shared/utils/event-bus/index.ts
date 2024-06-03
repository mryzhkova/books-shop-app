import { EventMap, IEventBus, ListenerFn } from './types';

export class EventBus<T extends EventMap> implements IEventBus<T> {
    private listeners = {} as { [key in keyof T]: Array<ListenerFn<T[key]>> };

    public subscribe<E extends keyof T>(eventName: E, callback: ListenerFn<T[E]>): () => void {
        if (!this.listeners[eventName]) {
            this.listeners[eventName] = [callback];
        } else if (!this.listeners[eventName].includes(callback)) {
            this.listeners[eventName].push(callback);
        }

        return () => this.unsubscribe(eventName, callback);
    }

    public unsubscribe<E extends keyof T>(eventName: E, callback: ListenerFn<T[E]>) {
        this.listeners[eventName]?.splice(this.listeners[eventName].indexOf(callback), 1);
    }

    public emit<E extends keyof T>(eventName: E, args: T[E]) {
        const eventListeners = this.listeners[eventName] || [];

        eventListeners.forEach((callback) => {
            callback(args);
        });
    }
}

export const getEventBus = () => window.eventBus;

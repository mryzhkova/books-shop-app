export type HeaderConfig = {
    activeCart: boolean;
};

export type EventMap = {
    CHANGE_HEADER_CONFIG: HeaderConfig;
};

export type ListenerFn<Arg> = (arg: Arg) => void;

export interface IEventBus<T extends EventMap> {
    emit<E extends keyof T>(eventName: E, args: T[E]): void;

    subscribe<E extends keyof T>(eventName: E, callback: ListenerFn<T[E]>): () => void;
    unsubscribe<E extends keyof T>(eventName: E, callback: ListenerFn<T[E]>): void;
}

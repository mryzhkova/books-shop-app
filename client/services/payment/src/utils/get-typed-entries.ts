type Entries<T> = {
    [K in keyof T]: [K, T[K]];
}[keyof T][];

export const getTypedEntries = <T extends object>(object: T): Entries<T> =>
    Object.entries(object) as Entries<T>;

export type Nullable<T> = T | null;

export type User = {
    id: number,
    email: string,
    name: string,
}

export type Room = {
    id: number,
    code: string,
    name: string,
};
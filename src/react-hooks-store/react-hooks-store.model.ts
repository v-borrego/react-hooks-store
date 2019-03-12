export interface BaseAction<T> {
  type: string;
  payload: T;
}

export type Reducer<T> = (reducerState: T, action: BaseAction<Partial<T>>) => T;

// export type Reducers<T> = { [K in keyof T]: Reducer<T[K]> };
// export type Reducers<T> = { [propName: string]: Reducer<Partial<T>> };
export type Reducers<T> = { [K in keyof T]: Reducer<Partial<T[keyof T]>> };

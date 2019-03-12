import * as React from "react";

import { BaseAction, Reducer } from "./react-hooks-store.model";
import { storeContext } from "./react-hooks-store.create-store";

interface StateProviderProps<S> {
  reducer: Reducer<S>;
  initialState: S;
}

export const ReactHooksStoreProvider = <S extends {}>(): React.FunctionComponent<StateProviderProps<S>> => props => (
  <storeContext.Provider
    value={React.useReducer<React.Reducer<S, BaseAction<S[keyof S]>>>(props.reducer, props.initialState)}
  >
    {props.children}
  </storeContext.Provider>
);

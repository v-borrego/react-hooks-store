import * as React from "react";
import { BaseAction } from "./react-hooks-store.model";

export const createStore = <S extends {}>() => {
  storeContext = React.createContext<[S, React.Dispatch<BaseAction<S[keyof S]>>]>([null, null]);
  return () => React.useContext<[S, React.Dispatch<BaseAction<any>>]>(storeContext);
};

export let storeContext;

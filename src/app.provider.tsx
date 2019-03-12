import * as React from "react";
import { AppState } from "./app.store";

export interface BaseAction<T> {
  type: string;
  payload: any;
}

export const StateContext = React.createContext<[AppState, React.Dispatch<BaseAction<AppState>>]>([
  { repositories: [], user: "" },
  null,
]);

interface StateProviderProps {
  reducer: any;
  initialState: any;
}

export const StateProvider: React.FunctionComponent<StateProviderProps> = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={React.useReducer<React.Reducer<AppState, any>>(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const getState = () => React.useContext(StateContext);

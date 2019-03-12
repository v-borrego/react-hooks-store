import * as React from "react";
import { StateProvider } from "./app.provider";
import { GithubRepository } from "./api/model";

export interface AppState {
  repositories: GithubRepository[];
  user: string;
}

export const combineReducers = <S extends {}>(initialState: S) => (reducers: (<T>(reducerState, action) => T)[]) => (
  state: S,
  currentAction
): S => {
  return reducers.reduce((accumulateState, reducer) => {
    return reducer(accumulateState, currentAction);
  }, state || initialState);
};

export const AppStore: React.FunctionComponent = ({ children }) => {
  const initialState: AppState = {
    repositories: [],
    user: "",
  };

  const reducer1 = <AppState extends {}>(state: AppState, action): AppState => {
    switch (action.type) {
      case "setRepositories":
        return {
          ...state,
          repositories: action.payload,
        };
    }
    return state;
  };

  const reducer2 = <AppState extends {}>(state: AppState, action): AppState => {
    switch (action.type) {
      case "setUser":
        return {
          ...state,
          user: action.payload,
        };
    }
    return state;
  };

  return (
    <StateProvider initialState={initialState} reducer={combineReducers(initialState)([reducer1, reducer2])}>
      {children}
    </StateProvider>
  );
};

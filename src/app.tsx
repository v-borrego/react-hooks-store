import * as React from "react";

import { AppRoutes } from "./app.routes";
import { initialState, rootReducer, AppState } from "./app.store";
import { ReactHooksStoreProvider } from "./react-hooks-store/react-hooks-store.provider";

import { createStore } from "./react-hooks-store/react-hooks-store.create-store";

export const getAppState = createStore<AppState>();
const AppStoreProvider = ReactHooksStoreProvider<AppState>();

export const App = () => {
  return (
    <AppStoreProvider initialState={initialState} reducer={rootReducer}>
      <AppRoutes />
    </AppStoreProvider>
  );
};

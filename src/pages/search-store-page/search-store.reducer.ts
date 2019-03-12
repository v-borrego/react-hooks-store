import { AppState } from "../../app.store";
import { GithubRepository } from "../../api/model";

import { Reducer, BaseAction } from "../../react-hooks-store";
import { actionTypes } from "./search-store.actions";

export interface SearchReducerState {
  repositories: GithubRepository[];
  loading: boolean;
}

export const initialSearchReducerState: SearchReducerState = {
  repositories: [],
  loading: false,
};

export const searchReducer: Reducer<SearchReducerState> = (
  state: SearchReducerState = initialSearchReducerState,
  action: BaseAction<Partial<SearchReducerState>>
): SearchReducerState => {
  switch (action.type) {
    case actionTypes.SET_LOADING:
      return handleSetLoading(state, action.payload as boolean);
    case actionTypes.SET_REPOSITORIES:
      return handleSetRepositories(state, action.payload as GithubRepository[]);
  }
  return state;
};

const handleSetRepositories = (state: SearchReducerState, repositories: GithubRepository[]) => ({
  ...state,
  repositories,
  loading: false,
});

const handleSetLoading = (state: SearchReducerState, loading: boolean) => ({
  ...state,
  loading,
});

import { GithubRepository } from "./api/model";
import { combineReducers } from "./react-hooks-store";
import { userReducer, UserState, initialUserState } from "./pages/home-page/home-page.reducer";
import {
  searchReducer,
  SearchReducerState,
  initialSearchReducerState,
} from "./pages/search-store-page/search-store.reducer";

export interface AppState {
  searchRepositories: SearchReducerState;
  user: UserState;
}

export const rootReducer = combineReducers<AppState>({
  user: userReducer,
  searchRepositories: searchReducer,
});

export const initialState: AppState = {
  searchRepositories: initialSearchReducerState,
  user: initialUserState,
};

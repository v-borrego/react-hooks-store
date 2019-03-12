import { BaseAction } from "../../react-hooks-store";
import { GithubRepository } from "../../api/model";

export enum actionTypes {
  SET_LOADING = "[SEARCH] [01] [SET_LOADING] Set loading state",
  SET_REPOSITORIES = "[SEARCH] [02] [SET_REPOSITORIES] Set repositories list",
}

export const setLoadingAction = (loading: boolean): BaseAction<boolean> => ({
  type: actionTypes.SET_LOADING,
  payload: loading,
});

export const setRepositoriesAction = (repositories: GithubRepository[]): BaseAction<GithubRepository[]> => ({
  type: actionTypes.SET_REPOSITORIES,
  payload: repositories,
});

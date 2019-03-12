import Axios, { AxiosResponse } from "axios";
import {
  GithubSearchUsersResponse,
  GithubRepository,
  GithubRepositoryResponse
} from "./model";

const githubApi = "https://api.github.com";
const githubEndpoints = {
  users: `${githubApi}/search/users`,
  repositories: `${githubApi}/search/repositories`
};

const get = <T>(
  url: string,
  params: { [propName: string]: string | number }
): Promise<T> => {
  return new Promise<T>((resolve, reject) => {
    try {
      Axios.get<T>(url, {
        params: params
      }).then(response => resolve(response.data));
    } catch (e) {
      reject(e);
    }
  });
};

export const searchGithubUsers = (
  searchText: string
): Promise<GithubSearchUsersResponse> => {
  return get<GithubSearchUsersResponse>(githubEndpoints.users, {
    q: searchText
  });
};

export const searchRepositoriesTopics = (
  topic: string,
  language: string = "any"
) => {
  return get<GithubRepositoryResponse>(githubEndpoints.repositories, {
    q: `${topic}+language:${language}+owner:{type:user}`,
    sort: "stars",
    order: "desc",
    per_page: 100,
    page: -1
  });
};

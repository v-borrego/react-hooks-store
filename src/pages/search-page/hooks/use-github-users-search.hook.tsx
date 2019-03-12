import * as React from "react";
import { GithubUser } from "../../../api/model";
import { searchGithubUsers } from "../../../api";

const useGithubSearch = () => {
  const [githubUsers, setGithubUsers] = React.useState<GithubUser[]>([]);

  const getGithubUsers = (searchText: string) => {
    searchGithubUsers(searchText).then(response => setGithubUsers(response.items));
  };

  return { githubUsers, getGithubUsers };
};

export { useGithubSearch };

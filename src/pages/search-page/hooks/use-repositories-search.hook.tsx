import * as React from "react";
import { GithubRepository } from "../../../api/model";
import { searchRepositoriesTopics } from "../../../api";

const useRepositoriesSearch = () => {
  const [repositories, setRepositories] = React.useState<GithubRepository[]>([]);

  const getRepositories = (topic: string) => {
    searchRepositoriesTopics(topic).then(response =>
      setRepositories(response.items.filter(x => x.owner.type === "User"))
    );
  };

  return { repositories, getRepositories };
};

export { useRepositoriesSearch };

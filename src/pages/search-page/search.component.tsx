import * as React from "react";
import { SearchBarComponent } from "./components/search-bar.component";

import { Avatar } from "@material-ui/core";
import { useRepositoriesSearch } from "./hooks";

export const SearchPageComponent = () => {
  const { repositories, getRepositories } = useRepositoriesSearch();

  const handleOnSearch = (searchText: string) => {
    getRepositories(searchText);
  };

  return (
    <>
      <SearchBarComponent onSearch={handleOnSearch} />
      {repositories.map(x => (
        <div key={x.id}>
          <Avatar src={x.owner.avatar_url} />
          {x.description} {x.score} {x.stargazers_count}
        </div>
      ))}
    </>
  );
};

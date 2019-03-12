import * as React from "react";
import { SearchBarComponent } from "./components/search-bar.component";

import ListItem from "@material-ui/core/ListItem/ListItem";
import Avatar from "@material-ui/core/Avatar/Avatar";
import { searchRepositoriesTopics } from "../../api";
import { getAppState } from "../../app";
import { setLoadingAction, setRepositoriesAction } from "./search-store.actions";

export const SearchStorePageComponent = () => {
  const [{ user, searchRepositories }, dispatch] = getAppState();

  const handleOnSearch = (searchText: string) => {
    dispatch(setLoadingAction(true));
    searchRepositoriesTopics(searchText).then(response => {
      dispatch(setRepositoriesAction(response.items));
    });
  };

  return (
    <>
      <p>Current user: {user.name || "Unknown"}</p>
      {searchRepositories.loading && <p>Loading...</p>}
      <SearchBarComponent onSearch={handleOnSearch} />
      {searchRepositories.repositories.map(x => (
        <ListItem key={x.id}>
          <Avatar src={x.owner.avatar_url} />
          {x.description} {x.score} {x.stargazers_count}
        </ListItem>
      ))}
    </>
  );
};

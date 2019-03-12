import * as React from "react";
import { SearchBarComponent } from "./components/search-bar.component";

import { Avatar } from "@material-ui/core";

import { getState } from "../../app.provider";
import { searchRepositoriesTopics } from "../../api";

export const SearchStorePageComponent = () => {
  const [state, dispatch] = getState();

  const handleOnSearch = (searchText: string) => {
    searchRepositoriesTopics(searchText).then(response => {
      dispatch({
        type: "setRepositories",
        payload: response.items.filter(x => x.owner.type === "User"),
      });
    });
  };

  const handleSetUserToVictor = () => {
    dispatch({
      type: "setUser",
      payload: "Victor",
    });
  };

  return (
    <>
      <SearchBarComponent onSearch={handleOnSearch} />
      <button onClick={handleSetUserToVictor}>Set user to Victor</button>
      {state && state.user && <div>User: {state.user}</div>}
      {state &&
        state.repositories.map(x => (
          <div key={x.id}>
            <Avatar src={x.owner.avatar_url} />
            {x.description} {x.score} {x.stargazers_count}
          </div>
        ))}
    </>
  );
};

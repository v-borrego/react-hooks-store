import * as React from "react";

import TextField from "@material-ui/core/TextField/TextField";

import Button from "@material-ui/core/Button/Button";
import { getAppState } from "../../app";
import { setUserNameAction } from "./home-page.actions";

export const HomePageComponent = () => {
  const [{ user }, dispatch] = getAppState();
  const [username, setUsername] = React.useState("");

  const handleOnClick = () => {
    dispatch(setUserNameAction(username));
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  return (
    <>
      <TextField value={username} onChange={handleOnChange} placeholder="What's your name?" />
      <Button onClick={handleOnClick}>Set appstate user</Button>
      <p>Current user: {user.name || "Unknown"}</p>
    </>
  );
};

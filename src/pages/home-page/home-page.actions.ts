import { BaseAction } from "../../react-hooks-store";

export enum actionTypes {
  SET_USER_NAME = "[USER] [01] [SET_USER] Set user name action dispatched",
}

export const setUserNameAction = (username: string): BaseAction<string> => ({
  type: actionTypes.SET_USER_NAME,
  payload: username,
});

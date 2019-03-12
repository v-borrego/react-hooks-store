import { Reducer, BaseAction } from "../../react-hooks-store";
import { actionTypes } from "./home-page.actions";

export interface UserState {
  name: string;
}

export const initialUserState: UserState = {
  name: "",
};

export const userReducer: Reducer<UserState> = (
  state: UserState = initialUserState,
  action: BaseAction<Partial<UserState>>
): UserState => {
  switch (action.type) {
    case actionTypes.SET_USER_NAME:
      return handleSetUserName(state, action.payload as string);
  }
  return state;
};

const handleSetUserName = (state: UserState, name: string): UserState => ({
  ...state,
  name,
});

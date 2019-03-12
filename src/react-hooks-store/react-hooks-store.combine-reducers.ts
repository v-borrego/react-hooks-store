import { BaseAction, Reducer, Reducers } from "./react-hooks-store.model";

export const combineReducers = <S>(reducers: Reducers<S>): Reducer<S> => (
  state: S,
  currentAction: BaseAction<Partial<S>>
): S =>
  Object.keys(reducers).reduce(
    (accumulateState, reducerName) => ({
      ...accumulateState,
      [reducerName]: reducers[reducerName](state[reducerName], currentAction),
    }),
    state
  );

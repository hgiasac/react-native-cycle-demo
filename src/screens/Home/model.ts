import xs, { Stream } from "xstream";
import { IActions } from "../../types";
import { IState, Reducer } from "./types";

export default function model(actions: IActions): Stream<Reducer> {

  const defaultReducer$ = xs.of(() => ({
    data: [],
    totalResults: 0,
  }));

  const responseReducer$ = actions.moviesResponse$
    .map((res) => (prev: IState) => ({
      ...prev,
      data: res.Search,
      totalResults: res.totalResults,
    }));

  return xs.merge(
    defaultReducer$,
    responseReducer$,
  );
}

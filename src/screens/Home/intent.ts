import { IActions } from "../../types";
import { ISources } from "./types";

export default function intent(source: ISources): IActions {

  const changeSearch$ = source.screen.select("txtSearch")
    .events("changeText")
    .filter((payload) => payload.length > 3);

  const moviesResponse$ = source.HTTP.select("movies")
    .flatten()
    .map((res) => res.body)
    .filter((res) => res.Response === "True");

  return {
    moviesResponse$,
    changeSearch$,
  };
}

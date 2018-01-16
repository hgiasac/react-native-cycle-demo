import { RequestOptions } from "@cycle/http";
import { Stream } from "xstream";
import { searchMovieUrl } from "../../api/omdb";
import { IActions } from "../../types";

export default function http(actions: IActions): Stream<RequestOptions> {

  return actions.changeSearch$.map((keyword) => ({
    url: searchMovieUrl(keyword),
    category: "movies"
  }));
}

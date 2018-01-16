import xs, { Stream } from "xstream";
import { IState, Reducer } from "./types";

export default function model(): Stream<Reducer> {

  return xs.of((prev: IState) => {
    if (prev) {
      return prev;
    }

    return <any> null;
  });
}

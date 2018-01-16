import debounce from "xstream/extra/debounce";
import { IActions } from "../../../types";
import { ISources } from "./types";

export default function intent(sources: ISources): IActions {

  const clickItem$ = sources.screen.select("itemView")
    .events("press")
    .compose(debounce(300));

  return {
    clickItem$,
  };
}

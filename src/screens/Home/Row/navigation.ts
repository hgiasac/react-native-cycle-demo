import { PushCommand } from "cycle-native-navigation";
import { Stream } from "xstream";
import { IActions } from "../../../types";
import { IState } from "./types";

export function navigation(actions: IActions, state$: Stream<IState>): Stream<PushCommand> {

  return actions.clickItem$
    .mapTo(
      state$.map((data) => ({
        type: <any> "push",
        screen: "rn.Detail",
        title: "Detail",
        passProps: data
      }))
    ).flatten();
}

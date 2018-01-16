export { StateSource } from "cycle-onionify";
import isolate from "@cycle/isolate";
import { h } from "@cycle/native-screen";
import { makeCollection } from "cycle-onionify";
import { View } from "react-native";
import xs from "xstream";
import { MovieRow } from "./Row";
import http from "./http";
import intent from "./intent";
import model from "./model";
import { ISinks, ISources } from "./types";
import view from "./view";

export function Home(sources: ISources): ISinks {
  const List = makeCollection({
    item: MovieRow,
    itemKey: (_, idx: number) => idx.toString(),
    itemScope: (key) => key,
    collectSinks(instances) {
      return {
        onion: instances.pickMerge("onion"),
        screen: instances.pickCombine("screen")
          .map((itemNodes) => h(View, { style: { flex: 1 }}, itemNodes)),
        navigation: instances.pickMerge("navigation")
      };
    }
  });

  const listSinks = isolate(List, "data")(sources);

  const state$ = sources.onion.state$;
  const actions = intent(sources);
  const parentReducer$ = model(actions);
  const reducer$ = <any> xs.merge(parentReducer$, listSinks.onion);

  const http$ = http(actions);
  const vdom$ = view(state$, listSinks.screen);

  return {
    screen: vdom$,
    onion: reducer$,
    navigation: listSinks.navigation,
    HTTP: http$,
  };
}

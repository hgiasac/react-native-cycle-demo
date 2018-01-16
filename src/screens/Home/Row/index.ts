import intent from "./intent";
import model from "./model";
import { navigation } from "./navigation";
import { ISinks, ISources } from "./types";
import { view } from "./view";

export function MovieRow(sources: ISources): ISinks {
  const state$ = sources.onion.state$;
  const actions = intent(sources);
  const nav$ = navigation(actions, state$);
  const reducer$ = model();
  const vdom$ = view(state$);

  return {
    screen: vdom$,
    onion: reducer$,
    navigation: nav$,
  };
}

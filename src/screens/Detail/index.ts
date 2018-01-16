import { h, ScreenSource } from "@cycle/native-screen";
export { StateSource } from "cycle-onionify";
import { Command } from "cycle-native-navigation";
import { Button, StyleSheet, Text, View } from "react-native";
import xs, { Stream } from "xstream";

type IState = any;
type IReducer<T> = (prev: T) => T;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
  },
});

export interface ISources {
  screen: ScreenSource;
  onion: any;
  navigation: Stream<any>;
}

export interface ISinks {
  screen: Stream<any>;
  onion: Stream<IReducer<IState>>;
  // navigation: Stream<Command>;
}

export function view(state$: Stream<any>) {
  return state$.map(() => {

    return {
      screen: "rn.Detail",
      vdom: h(View, { style: styles.container }, [
        h(Text, { style: styles.welcome }, "Detail Page"),
      ])
    };
  });
}

export function Detail(source: ISources): ISinks {
  const state$ = source.onion.state$;
  const reducer$ = xs.of(() => ({ }));
  const vdom$ = view(state$);

  // const back$ = source.navigation
  //   .filter((ev) => ev.id === "backPress")
  //   .mapTo(<any> { type: "pop" });

  return {
    screen: vdom$,
    onion: reducer$,
    // navigation: back$,
  };
}

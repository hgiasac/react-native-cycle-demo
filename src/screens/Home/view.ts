import { h } from "@cycle/native-screen";
import { StyleSheet, TextInput, View} from "react-native";
import xs, { Stream } from "xstream";
import { Palette } from "../../styles/palette";
import { IScreenView } from "../../types";
import { IState } from "./types";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    // alignItems: "center",
    // backgroundColor: Palette.white,
  },
  textSearch: {
    height: 40,
    marginTop: 20,
    borderColor: Palette.gray3,
    borderWidth: 1
  }
});

export default function view(state$: Stream<IState>, listDOM$: Stream<any>): Stream<IScreenView> {

  return xs.combine(state$, listDOM$)
    .map(([_, listDOM]) => {

      return {
        screen: "rn.Home",
        vdom: h(View, { style: styles.container }, [
          h(View, {}, [
            h(TextInput, {
              selector: "txtSearch",
              style: styles.textSearch
            }),
          ]),
          listDOM,
        ])
      };
    });
}

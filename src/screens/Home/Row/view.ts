import { h } from "@cycle/native-screen";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Stream } from "xstream";
import { IState } from "./types";

export function view(state$: Stream<IState>): Stream<any> {

  return state$.filter((data) => !!data)
    .map((data) => {
      return h(TouchableOpacity, {
        style: { flex: 1, flexDirection: "row" },
        selector: `itemView`
      }, [
        h(View, [
          h(Image, {
            source: { uri: data.Poster },
            style: { width: 50, height: 80, padding: 10 }
          }),
        ]),
        h(View, [
          h(Text, { style: { color: "#000000", padding: 10 } }, data.Title),
        ])
      ]);
    });
}

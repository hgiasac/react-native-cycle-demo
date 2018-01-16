import {makeHTTPDriver} from "@cycle/http";
import { run } from "@cycle/run";
import { makeSingleScreenNavDrivers } from "cycle-native-navigation";
import onionify from "cycle-onionify";
import { App } from "./App";
import { navigatorStyle } from "./screens/Home/styles";

const {screenVNodeDriver, commandDriver} = makeSingleScreenNavDrivers(
  ["rn.Home", "rn.Detail"],
  {
    screen: {
      navigatorStyle,
      screen: "rn.Home",
    },
    animationType: "fade",
  },
);

export function runApp() {
  run(onionify(App), {
    screen: screenVNodeDriver,
    navigation: commandDriver,
    HTTP: makeHTTPDriver(),
  });
}

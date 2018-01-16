export { StateSource } from "cycle-onionify";
import isolate from "@cycle/isolate";
import xs from "xstream";
import { Detail } from "./screens/Detail";
import { Home } from "./screens/Home";
import { IBaseSinks, IBaseSources } from "./types";

export function App(source: IBaseSources<any>): IBaseSinks<any> {
  const homeSinks = isolate(Home, {
    "*": "Home",
  })(source);

  const detailSinks = isolate(Detail, {
    "*": "Detail"
  })(source);

  return {
    screen: xs.merge(homeSinks.screen, detailSinks.screen),
    onion: <any> xs.merge(homeSinks.onion, detailSinks.onion),
    navigation: <any> homeSinks.navigation,
    HTTP: homeSinks.HTTP
  };
}

import { HTTPSource, RequestOptions } from "@cycle/http";
import { ScreenSource } from "@cycle/native-screen";
import { Command } from "cycle-native-navigation";
import { StateSource } from "cycle-onionify";
import { Stream } from "xstream";

export type Reducer<T> = (prev?: T) => T;

export interface IBaseSources<T> {
  screen: ScreenSource;
  onion: StateSource<T>;
  navigation: Stream<any>;
  HTTP: HTTPSource;
}

export interface IBaseSinks<T> {
  screen: Stream<any>;
  onion: Stream<Reducer<T>>;
  navigation: Stream<Command>;
  HTTP?: Stream<RequestOptions>;
}

export interface IActions {
  [key: string]: Stream<any>;
}

export interface IScreenView {
  screen: string;
  vdom: React.ReactElement<any>;
}

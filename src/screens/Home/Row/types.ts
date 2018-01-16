import { IMovie } from "../../../api/omdb";
import { IBaseSinks, IBaseSources } from "../../../types";

export type IState = IMovie;

export type Reducer = (prev?: IState) => IState;
export type ISources = IBaseSources<IState>;
export type ISinks = IBaseSinks<IState>;

import { IMovie } from "../../api/omdb";
import { IBaseSinks, IBaseSources } from "../../types";

export interface IState {
  data: IMovie[];
  totalResults: number;
}

export type Reducer = (prev?: IState) => IState;
export type ISources = IBaseSources<IState>;
export type ISinks = IBaseSinks<IState>;

export type IListState = IMovie[];
export type ListReducer = (prev?: IListState) => IListState;
export type IListSources = IBaseSources<IListState>;
export type IListSinks = IBaseSinks<IListState>;

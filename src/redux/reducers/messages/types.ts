import { IMessages } from "../../../@types";

export interface IGetAction {
  type: string;
  payload: IMessages[];
};

export interface IRemoveAction {
  type: string;
  payload: { _id: string };
};

export type State = IMessages[];


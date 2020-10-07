export interface IAction {
  type: string;
  payload: {
    id: string;
    name: string;
    email: string;
    token: string;
    avatar: string;
  };
};

export interface IActionError {
  type: string;
  payload: { error: string };
};

export interface IState {
  useData: null | {
    id: string;
    name: string;
    email: string;
    token: string;
    avatar: string;
  };
  error: false | string;
};
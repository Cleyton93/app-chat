export interface IAuthenticate {
  isLogged?: null | boolean;
  userData: null | {
    id: string;
    name: string;
    email: string;
    token: string;
    avatar: string;
  };
  error?: false | string;
};

export interface IMapAuthenticate {
  authenticate: IAuthenticate;
};
export interface IMessages {
  _id: string;
  message: string;
  user: {
    _id: string;
    name: string;
    email: string;
    avatar: string;
    token: string;
  };
  createdAt: Date;
  updatedAt: Date;
};

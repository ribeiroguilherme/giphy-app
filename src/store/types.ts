export interface IState {
  user: IUser;
}

export interface IUser {
  name?: string;
  isAuthenticated: boolean;
}

export interface IState {
  user: IUser | null;
  status: IAuthenticationStatus;
}

export interface IAuthenticationStatus {
  loggedIn: boolean;
  loggingIn: boolean;
}
export interface IUser {
  name: string;
  email: string;
}

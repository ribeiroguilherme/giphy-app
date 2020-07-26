export interface IRootState {
  gifs: IGifsState;
  account: IAccountState;
}
export interface IGifsState {
  starredGifs: string[];
}
export interface IAccountState {
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

export interface IUser {
  email?: string;
  token?: string;
}

export interface IContext extends IUser {
  authenticated: boolean;
  user: IUser | null | undefined;
  login: (email: string, password: string) => void;
  logout: () => void;
  loading: boolean;
}

export interface IAuthProvider {
  children: JSX.Element;
}

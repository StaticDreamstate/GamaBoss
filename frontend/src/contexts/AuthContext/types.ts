export interface IUser {
  email?: string;
  token?: string;
}

export interface IContext extends IUser {
  authenticated: boolean;
  user: IUser | null | undefined;
  login: (email: string, password: string) => void;
  writeError: (email: string, password: string) => void;
  logout: () => void;
  loading: boolean;
  errorResponse: any;
  setErrorResponse: any;
}

export interface IAuthProvider {
  children: JSX.Element;
}

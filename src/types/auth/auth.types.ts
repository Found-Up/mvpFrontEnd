import { User } from "../users/user.types";


export type AuthContextType = {
  dispatch: React.Dispatch<AuthActions>;
  user?: User | null;
}

export enum AuthActionTypes {
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT',
};

export interface AuthActions {
  type: AuthActionTypes;
  payload: any;
};

export interface AuthState {
  user: User;
}

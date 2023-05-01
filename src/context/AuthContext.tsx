import { createContext, useReducer, useEffect } from 'react';
import { AuthActionTypes, AuthActions, AuthContextType, AuthState } from '../types/auth/auth.types';

export const AuthContext = createContext<AuthContextType | null>(null);

export const authReducer = (state: AuthState, action: AuthActions ) => {
  switch (action.type) {
    case 'LOGIN':
      return { user: action.payload }
    case 'LOGOUT':
      return { user: null }
    default:
      return state
  }
}

export const AuthContextProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  });

  useEffect(() => {
    const user: string = JSON.parse(localStorage.getItem('user')!);

    if (user) {
      dispatch({type: AuthActionTypes.LOGIN, payload: user})
    }
  }, [])

  console.log('AuthContext state: ', state)

  return (
    <AuthContext.Provider value={{...state, dispatch}}>
      { children }
    </AuthContext.Provider>
  )
}
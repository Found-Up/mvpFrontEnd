import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { AuthActionTypes } from "../types/auth/auth.types";

export const useLogin = () => {
  const [error, setError] = useState<boolean | undefined>();
  const [isLoading, setIsLoading] = useState<boolean | undefined>();
  const { dispatch } = useAuthContext();

  const login = async (username: any, password: any) => {
    setIsLoading(true);
    setError(undefined);

    const response = await fetch(process.env.REACT_APP_API_URL + 'api/v1/AuthService/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({username, password}),
    });
    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }
    if (response.ok) {
      localStorage.setItem('user', JSON.stringify(json));

      dispatch({type: AuthActionTypes.LOGIN, payload: json});

      setIsLoading(false);
    }
  }

  return { login, isLoading, error }
}
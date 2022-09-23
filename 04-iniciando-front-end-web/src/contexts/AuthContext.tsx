import React, { createContext, ReactNode, useCallback } from 'react';
import { api } from '../services/api';

interface ISignInCredentials {
  email: string;
  password: string;
}

interface IAuthContext {
  name: string;
  signIn(credentials: ISignInCredentials): Promise<void>;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

interface IAuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: IAuthProviderProps) {
  const signIn = useCallback(
    async ({ email, password }: ISignInCredentials) => {
      const response = await api.post('sessions', {
        email,
        password,
      });

      console.log(response.data);
    },
    [],
  );

  return (
    <AuthContext.Provider value={{ name: 'Diego', signIn }}>
      {children}
    </AuthContext.Provider>
  );
}

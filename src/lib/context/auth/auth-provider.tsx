import { useRouter } from 'next/router';
import { createContext, useContext, useEffect, useState } from 'react';

import { IAuthResponse } from '../../interfaces/api-response/auth/auth-response';
import { AuthContextData, AuthStorageKeys, UserInfo } from './auth-context';

type AuthProviderProps = {
  children: React.ReactNode;
};

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const router = useRouter();
  const [authData, setAuthData] = useState<IAuthResponse | undefined>(
    undefined,
  );
  const [loading, setLoading] = useState(true);
  const login = async (data: IAuthResponse) => {
    const shortName = createShortName(data);
    const userData = { ...data, ...shortName };
    setAuthData(userData);
    localStorage.setItem(AuthStorageKeys.Token, JSON.stringify(userData));
    localStorage.setItem(AuthStorageKeys.LoginDate, Date.now().toString());
  };

  const handleSetAuthData = (data: IAuthResponse | undefined) => {
    setAuthData(data);
  };

  const logout = async () => {
    const authData = localStorage.getItem(AuthStorageKeys.Token);
    if (authData) {
      try {
        localStorage.removeItem(AuthStorageKeys.Token);
        localStorage.removeItem(AuthStorageKeys.KeepConnected);
        localStorage.removeItem(AuthStorageKeys.RefreshToken);
        localStorage.removeItem(AuthStorageKeys.LoginDate);
        router.push('/');
      } catch (e: any) {
      } finally {
        handleSetAuthData(undefined);
      }
    }
  };

  const createShortName = (data: IAuthResponse) => {
    const { user } = data;
    const rgxName: string[] = user.name?.match(/[a-z,A-Z]{1,10}/g) || [];

    const shortName = { shortName: rgxName[0] + ' ' + rgxName[1] };
    return shortName;
  };

  const loadFromStorage = () => {
    const json = localStorage.getItem(AuthStorageKeys.Token);

    if (json) {
      const parsedJson = JSON.parse(json);
      handleSetAuthData({
        token: parsedJson.token,
        user: parsedJson.user,
      } as IAuthResponse);
    }
    setLoading(false);
  };

  const updateUserInfo = ({ email, name }: UserInfo) => {
    setAuthData((prev) => {
      if (prev) {
        return { ...prev, name, email };
      }
    });
  };

  useEffect(() => {
    loadFromStorage();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        auth: authData,
        setAuthData: handleSetAuthData,
        loading,
        login,
        logout,
        updateUserInfo,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  return useContext(AuthContext);
}

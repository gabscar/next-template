import { useAuth } from '@src/lib/context/auth/auth-provider';
import { IAuthParams, IAuthUser } from './interfaces';
import { useState } from 'react';
import { ConstructRequisition } from '../utils/ConstructRequisitions';

export const authRequests = (): IAuthUser => {
  const [loading, setLoading] = useState(true);
  const auth = useAuth();

  async function getAuth(): Promise<any> {
    const data = await ConstructRequisition({
      url: '/auth',
      constructErrors: (err: unknown) => {},
      constructSuccess: (value: any) => {
        auth.setAuthData(value);
      },
      setLoading,
      type: 'get',
    });

    return data;
  }
  async function setSession(params: IAuthParams<any>): Promise<any> {
    return await ConstructRequisition({
      url: '/session',
      constructErrors: (err: unknown) => {
        params.errorCallback && params.errorCallback(err);
      },
      constructSuccess: (value: any) => {
        auth.setAuthData(value);
        params.successCallback && params?.successCallback(value);
      },
      setLoading,
      type: 'post',
      params,
    });
  }

  return {
    getAuth,
    setSession,
    loading,
  };
};

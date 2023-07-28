import { IAuthResponse } from '@src/lib/interfaces/api-response/auth/auth-response';

export type UserInfo = {
  name: string;
  email: string;
};

export interface AuthContextData {
  auth?: IAuthResponse;
  setAuthData: (data: IAuthResponse | undefined) => void;
  login: (authData: IAuthResponse) => void;
  logout: () => Promise<void>;
  updateUserInfo: (data: UserInfo) => void;

  loading: boolean;
}

export enum AuthStorageKeys {
  Token = '@template:authData',
  RefreshToken = '@template:refreshToken',
  KeepConnected = '@template:keepConnected',
  LoginDate = '@template:loginDate',
  User = '@template:user',
}

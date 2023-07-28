export interface IAuthResponse {
  token: string;
  user: {
    name: string;
    email: string;
    id: string;
    role: string;
  };
  shortName: string;
}

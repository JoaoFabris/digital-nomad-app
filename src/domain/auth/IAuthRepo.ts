///home/fabris/digital-nomad-app/src/domain/auth/IAuthRepo.ts
//Este arquivo define um contrato de interface para o repositório de autenticação, seguindo os princípios da Arquitetura Limpa (Clean Architecture).
import { AuthUser } from "./AuthUser";

export type AuthSignUpParams = {
  fullname: string;
  email: string;
  password: string;
};

export type AuthUpdateProfileParams = {
  fullname: string;
  email: string;
};
export type AuthUpdatePasswordParams = {
  currentPassword: string;
  newPassword: string;
};

export interface IAuthRepo {
  signIn: (email: string, password: string) => Promise<AuthUser>;
  signOut: () => Promise<void>;
  signUp: (params: AuthSignUpParams) => Promise<void>;
  sendResetPasswordEmail: (email: string) => Promise<void>;
  getUser: () => Promise<AuthUser>;
  updateProfile: (params: AuthUpdateProfileParams) => Promise<void>;
  updatePassword: (params: AuthUpdatePasswordParams) => Promise<void>;
}
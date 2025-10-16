///home/fabris/digital-nomad-app/src/domain/auth/IAuthRepo.ts
//Este arquivo define um contrato de interface para o repositório de autenticação, seguindo os princípios da Arquitetura Limpa (Clean Architecture).
import { AuthUser } from "./AuthUser";

export type AuthSignUpParams = {
  fullname: string;
  email: string;
  password: string;
};

export interface IAuthRepo {
  signIn: (email: string, password: string) => Promise<AuthUser>;
  signOut: () => Promise<void>;
  signUp: (params: AuthSignUpParams) => Promise<void>; //o schema do signup n serve para esse caso, por exemplo: o back end n precisa receber o 'confirmpassword'
  sendResetPasswordEmail: (email: string) => Promise<void>;
}


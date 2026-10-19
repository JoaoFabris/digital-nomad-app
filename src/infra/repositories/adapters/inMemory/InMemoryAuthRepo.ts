///home/fabris/digital-nomad-app/src/infra/repositories/adapters/inMemory/InMemoryAuthRepo.ts

// Este arquivo é uma implementação em memória do repositório de autenticação, criada principalmente para desenvolvimento, testes e prototipagem. 
// É uma implementação "fake" que simula operações de autenticação sem usar um serviço real.

// O InMemoryAuthRepo implementa a interface IAuthRepo usando dados armazenados na memória (array local), 
// permitindo desenvolver e testar a aplicação sem depender de serviços externos como Firebase, Supabase, etc.

import { AuthUser } from "@/src/domain/auth/AuthUser";
import { AuthSignUpParams, IAuthRepo } from "@/src/domain/auth/IAuthRepo";
import { authUsers } from "./data/authUsers";

export class InMemoryAuthRepo implements IAuthRepo {
  async signIn(email: string, password: string): Promise<AuthUser> {
    const user = authUsers.find((user) => user.email === email);
    if (user) {
      return user;
    }

    throw new Error("user not found");
  }

  async signUp(params: AuthSignUpParams): Promise<void> {
    const userAlreadyExist = authUsers.find(
      (user) => user.email === params.email
    );
    if (userAlreadyExist) {
      throw new Error("user already exist");
    }

    return;
  }

  async signOut(): Promise<void> {
    //
  }

  async sendResetPasswordEmail(email: string): Promise<void> {
    console.log("the reset password has been sent:", email);
  }

  async getUser(): Promise<AuthUser> {
    return authUsers[0];
  }

  async updateProfile(): Promise<void> {
    return;
  }

  async updatePassword(): Promise<void> {
    return;
  }
}
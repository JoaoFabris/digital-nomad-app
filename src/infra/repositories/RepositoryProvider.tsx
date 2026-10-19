// /home/fabris/digital-nomad-app/src/infra/repositories/RepositoryProvider.tsx
import { Repositories } from "@/src/domain/Repositories";
import React from "react";

export const RepositoryContext = React.createContext<Repositories>(
  {} as Repositories
);

export const RepositoryProvider = RepositoryContext.Provider;

export function useRepository(): Repositories {
  const context = React.useContext(RepositoryContext);

  if (!context) {
    throw new Error(
      "Repository Context should be used within a RepositoryProvider"
    );
  }

  return context;
}

// No contexto de uma aplicação React Native, um RepositoryProvider serve para implementar o padrão de Dependency Injection 
// (Injeção de Dependência) usando o Context API do React. Vou explicar suas principais funções:


// 1. Centralização de Acesso aos Repositórios
// O RepositoryProvider fornece uma forma centralizada de acessar todos os repositórios da aplicação (como UserRepository, ProductRepository, etc.) em qualquer componente da árvore de componentes.

// 2. Desacoplamento de Dependências
// Permite que os componentes não precisem conhecer diretamente as implementações dos repositórios, seguindo o princípio da Inversão de Dependência.

// 3. Facilita Testes
// Durante os testes, você pode facilmente substituir os repositórios reais por mocks ou stubs.


// React.createContext cria um contexto que pode ser usado para compartilhar dados globalmente no React sem precisar passar props manualmente.

// Aqui, o tipo do contexto é Repositories (provavelmente uma interface que define todos os repositórios da sua aplicação, como UserRepository, AuthRepository etc.).

// Inicialmente, está sendo passado um objeto vazio ({} as Repositories) apenas para satisfazer o TypeScript.
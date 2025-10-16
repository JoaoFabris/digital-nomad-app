///home/fabris/digital-nomad-app/src/domain/auth/operations/useAuthSignUp.ts

import { useFeedbackService } from "@/src/infra/feedbackService/FeedbackProvider";
import {
  useAppMutation,
  UseAppMutationOptions,
} from "@/src/infra/operations/useAppMutation";
import { useRepository } from "@/src/infra/repositories/RepositoryProvider";
import { AuthSignUpParams } from "../IAuthRepo";

export function useAuthSignUp(options?: UseAppMutationOptions<void>) {
  const { auth } = useRepository();
  const feedbackService = useFeedbackService();

  return useAppMutation<void, AuthSignUpParams>({
    mutateFn: (params) => auth.signUp(params),
    onSuccess: () => {
      options?.onSuccess?.();
      feedbackService.send({
        type: "success",
        message: `cadastro feito com sucesso`,
      });
    },
    onError: (error) => {
      options?.onError?.(error);
      feedbackService.send({ type: "error", message: "erro ao cadastrar" });
    },
  });
}

// Este arquivo é um hook customizado que encapsula a operação de cadastro de usuário (sign up), 
// seguindo o padrão de Clean Architecture e fornecendo uma interface simples para os componentes React.

// 🎯 Função Principal
// O useAuthSignUp é um hook que:

// Executa a operação de cadastro
// Gerencia estados de loading/error/success
// Exibe feedback automático para o usuário
// Permite customização via callbacks
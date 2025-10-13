import { useState } from "react";

type UseAppMutationReturn<DataT, TVariables> = {
  mutate: (variable: TVariables) => Promise<DataT | void>;
  isLoading: boolean;
  error: unknown;
};

export type UseAppMutationOptions<TData> = {
  onSuccess?: (data: TData) => void;
  onError?: (error: unknown) => void;
};

type UseAppMutationParams<TData, TVariables> = {
  mutateFn: (variable: TVariables) => Promise<TData>;
} & UseAppMutationOptions<TData>;

export function useAppMutation<TData, TVariables>({
  mutateFn,
  onSuccess,
  onError,
}: UseAppMutationParams<TData, TVariables>): UseAppMutationReturn<
  TData,
  TVariables
> {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>(null);

  async function mutate(variables: TVariables) {
    try {
      setIsLoading(true);
      setError(null);
      const data = await mutateFn(variables);
      onSuccess?.(data);
    } catch (error) {
      onError?.(error);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }

  return {
    mutate,
    isLoading,
    error,
  };
}


// Este código implementa um hook customizado para gerenciar mutações assíncronas (como chamadas de API, operações de banco de dados, etc.) de forma padronizada. É similar ao useMutation do React Query/TanStack Query.

// �� Propósito Principal
// O hook serve para encapsular a lógica comum de operações assíncronas que modificam dados, fornecendo:

// Estado de loading
// Tratamento de erros
// Callbacks de sucesso/erro
// Interface consistente
//mutate: Função para executar a operação
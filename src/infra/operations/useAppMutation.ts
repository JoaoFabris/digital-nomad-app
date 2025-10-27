import { useMutation } from "@tanstack/react-query";

type UseAppMutationReturn<DataT, TVariables> = {
  mutate: (variable: TVariables) => DataT | void;
  isPending: boolean;
  error: Error | null;
};

export type UseAppMutationOptions<TData> = {
  onSuccess?: (data: TData) => void;
    onError?: (error: Error) => void; //  Tipo mais específico
};

type UseAppMutationParams<TData, TVariables> = {
  mutationFn: (variable: TVariables) => Promise<TData>;
} & UseAppMutationOptions<TData>;

export function useAppMutation<TData, TVariables>({
  mutationFn,
  onSuccess,
  onError,
}: UseAppMutationParams<TData, TVariables>): UseAppMutationReturn<
  TData,
  TVariables
> {
  const { isPending, error, mutate } = useMutation({
    mutationFn,
    onSuccess,
    onError,
  });

  return {
    mutate,
    isPending,
    error: error instanceof Error ? error : null, //Instância = objeto criado a partir de uma classe
  };
}

//É como perguntar: "Este objeto foi feito usando a receita do Error?" Se sim, sabemos que ele terá os "ingredientes" padrão (message, name, stack). Se não, pode ser qualquer coisa!

// Este código implementa um hook customizado para gerenciar mutações assíncronas (como chamadas de API, operações de banco de dados, etc.) de forma padronizada. É similar ao useMutation do React Query/TanStack Query.

// �� Propósito Principal
// O hook serve para encapsular a lógica comum de operações assíncronas que modificam dados, fornecendo:

// Estado de loading
// Tratamento de erros
// Callbacks de sucesso/erro
// Interface consistente
//mutate: Função para executar a operação
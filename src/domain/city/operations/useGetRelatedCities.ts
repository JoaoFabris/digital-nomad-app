import { useAppQuery } from "@/src/infra/operations/useAppQuery";
import { useRepository } from "@/src/infra/repositories/RepositoryProvider";

export function useGetRelatedCities(id: string) {
  const { city } = useRepository();
  return useAppQuery({
    queryKey: ["city", "related", id], //importante colocar o id para diferenciar as chamadas dentro do query
    fetchData: () => city.getRelatedCities(id),
  });
}
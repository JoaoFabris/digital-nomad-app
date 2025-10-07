import { SupabaseCityRepo } from "../infra/repositories/adapters/supabase/SupabaseCityRepo";
import { useFetchData } from "./useFetchData";

export function useCategories() {
  return useFetchData(() => SupabaseCityRepo.listCategory());
}
import { supabaseCityRepo } from "../supabase/supabaseService";
import { useFetchData } from "./useFetchData";

export function useCityDetails(id: string) {
  return useFetchData(() => supabaseCityRepo.findById(id));
}
import { Repositories } from '@/src/domain/Repositories';
import { InMemoryAuthRepo } from '../inMemory/InMemoryAuthRepo';
import { SupabaseCategoryRepo } from '../supabase/SupabaseCategoryRepo';
import { SupabaseCityRepo } from '../supabase/SupabaseCityRepo';

export const InMemoryRepository: Repositories = {
  auth: new InMemoryAuthRepo(),
  city: SupabaseCityRepo,
  category: SupabaseCategoryRepo,
};

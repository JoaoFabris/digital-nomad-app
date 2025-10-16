export type CategoryCode =
  | 'ADVENTURE'
  | 'BEACH'
  | 'CULTURE'
  | 'GASTRONOMY'
  | 'HISTORY'
  | 'LUXURY'
  | 'NATURE'
  | 'SHOPPING'
  | 'URBAN'
  | 'FAVORITE';

export type Category = {
  id: string;
  name: string;
  description: string | null;
  code: CategoryCode;
};

// com o principio de arquitetura de dados, agora nosso sistema n depende mais do supabase, e sim a api(nesse caso a supabase) vai denpender dele

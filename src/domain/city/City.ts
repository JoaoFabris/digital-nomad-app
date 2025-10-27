import { Category } from "../category/Category";

export type TouristAttraction = {
  id: string;
  name: string;
  description: string;
  cityId: string;
};

export type City = {
  id: string;
  name: string;
  country: string;
  coverImage: number | string;
  description: string;
  touristAttractions: TouristAttraction[];
  location: {
    latitude: number;
    longitude: number;
  };
  categories: Category[];
  isFavorite: boolean;
};

export type CityPreview = Pick<
  City,
  "id" | "name" | "country" | "coverImage" | "isFavorite"
>;
// com o principio de arquitetura de dados, agora nosso sistema n depende mais do supabase, e sim a api(nesse caso a supabase) vai denpender dele

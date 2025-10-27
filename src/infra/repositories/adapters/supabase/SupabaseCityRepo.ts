// Esse arquivo é muito importante — ele representa a implementação concreta de um repositório de cidades,
//  ou seja, é a camada que conversa diretamente com o banco de dados (Supabase).

// Em resumo, ele é o “tradutor” entre o domínio da aplicação e o banco de dados.

// No estilo Domain-Driven Design (DDD), o repositório é a camada que:

// esconde a lógica de acesso ao banco;

// transforma os dados crus em objetos do domínio (City, CityPreview);

// centraliza todas as operações de leitura e escrita relacionadas a cidades.


import { City, CityPreview } from "../../../../domain/city/City";
import {
  CitiesGroupedByCategory,
  CityToggleFavoriteParams,
  ICityRepo,
} from "../../../../domain/city/ICityRepo";

import { supabase } from "./supabase";
import { supabaseAdapter } from "./supabaseAdapter";
import { supabaseHelpers } from "./supabaseHelpers";

export type CityFilters = {
  name?: string;
  categoryId?: string | null;
};

const CITY_PREVIEW_FIELD =
  "id,name,country,cover_image,favorite_cities!left(user_id)";

async function findAll(filters: CityFilters): Promise<CityPreview[]> {
  try {
    const user = await supabaseHelpers.getUserFromSession();

    let cities;
    if (filters.categoryId) {
      const { data } = await supabase
        .from("cities_with_categories")
        .select(CITY_PREVIEW_FIELD)
        .eq("category_id", filters.categoryId)
        .ilike("name", `%${filters.name}%`)
        .eq("favorite_cities.user_id", user.id);

      cities = data;
    } else {
      const { data } = await supabase
        .from("cities")
        .select(CITY_PREVIEW_FIELD)
        .ilike("name", `%${filters.name}%`)
        .eq("favorite_cities.user_id", user.id);

      cities = data;
    }

    if (!cities) {
      throw new Error("data is not available");
    }

    return cities?.map((row) => supabaseAdapter.toCityPreview(row));
  } catch (error) {
    throw error;
  }
}

async function findById(id: string): Promise<City> {
  const user = await supabaseHelpers.getUserFromSession();

  const { data, error } = await supabase
    .from("cities_with_full_info")
    .select("*,favorite_cities(user_id)")
    .eq("id", id)
    .eq("favorite_cities.user_id", user.id)
    .single();

  if (error) {
    throw new Error("city not found");
  }

  return supabaseAdapter.toCity(data);
}

async function getRelatedCities(cityId: string): Promise<CityPreview[]> {
  const user = await supabaseHelpers.getUserFromSession();

  const { data } = await supabase
    .from("related_cities")
    .select(CITY_PREVIEW_FIELD)
    .eq("source_city_id", cityId)
    .eq("favorite_cities.user_id", user.id)

    .throwOnError();

  return data.map((row) => supabaseAdapter.toCityPreview(row));
}

async function toggleFavorite(params: CityToggleFavoriteParams): Promise<void> {
  const user = await supabaseHelpers.getUserFromSession();
  if (params.isFavorite) {
    await supabase
      .from("favorite_cities")
      .delete()
      .eq("user_id", user.id)
      .eq("city_id", params.cityId);
  } else {
    await supabase
      .from("favorite_cities")
      .insert({ city_id: params.cityId, user_id: user.id });
  }
}

async function findAllFavorites(): Promise<CityPreview[]> {
  const user = await supabaseHelpers.getUserFromSession();

  const { data } = await supabase
    .from("favorite_cities")
    .select(
      `
    city_id,
    cities (
      id,
      name,
      country,
      cover_image
      )
    `
    )
    .eq("user_id", user.id)
    .throwOnError();

  return data.map((item) => supabaseAdapter.toCityPreview(item.cities, true));
}

interface CategoryData {
  id: string;
  name: string;
  description: string;
  code: string;
  city_categories: {
    cities: {
      id: string;
      name: string;
      country: string;
      cover_image: string;
    };
  }[];
}

interface RawCategory {
  code: string;
  description: string;
  id: string;
  name: string;
}

async function findGroupedByCategory(): Promise<CitiesGroupedByCategory[]> {
  const { data } = await supabase
    .from("categories")
    .select(
      `
      id,
      name,
      description,
      code,
      city_categories (
        cities(
          id,
          name,
          country,
          cover_image
        )  
      )
    `
    )
    .throwOnError();

  return (data as CategoryData[]).map((item) => ({
    category: supabaseAdapter.toCategory({
      code: item.code,
      description: item.description,
      id: item.id,
      name: item.name,
    } as RawCategory),
    cities: item.city_categories.map((data) =>
      supabaseAdapter.toCityPreview(data.cities)
    ),
  }));
}

export const SupabaseCityRepo: ICityRepo = {
  findAll,
  findById,
  getRelatedCities,
  toggleFavorite,
  findAllFavorites,
  findGroupedByCategory,
};
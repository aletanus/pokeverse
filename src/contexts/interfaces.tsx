import { Dispatch, ReactNode, SetStateAction } from "react";

export interface AppContextData {
  pokemonNames: string[]
  setPokemonNames: Dispatch<SetStateAction<string[]>>
  getAllPokemonNames(url?: string): Promise<string[]>
  pokemonData: PokemonData | null
  setPokemonData: Dispatch<SetStateAction<PokemonData | null>>
  getPokemonByNameOrId(pokemon: string): Promise<void>
  getPokemonByType(type: string): void
  filteredPokemons: PokemonData[]
  setFilteredPokemons: Dispatch<SetStateAction<PokemonData[]>>
}

export interface Props {
  children: ReactNode;
}

export interface PokemonApiResponse {
  results: Pokemon[];
  next: string | null;
}

export interface ApiPokemonData {
    abilities: {
      ability: {
        name: string;
        url: string;
      };
      is_hidden: boolean;
      slot: number;
    }[];
    base_experience: number;
    forms: {
      name: string;
      url: string;
    }[];
    game_indices: {
      game_index: number;
      version: {
        name: string;
        url: string;
      };
    }[];
    height: number;
    held_items: unknown[];
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves: {
      move: {
        name: string;
        url: string;
      };
      version_group_details: {
        level_learned_at: number;
        move_learn_method: {
          name: string;
          url: string;
        };
        version_group: {
          name: string;
          url: string;
        };
      }[];
    }[];
    name: string;
    order: number;
    past_types: unknown[];
    species: {
      name: string;
      url: string;
    };
    sprites: {
      back_default: string;
      back_female: string | null;
      back_shiny: string;
      back_shiny_female: string | null;
      front_default: string;
      front_female: string | null;
      front_shiny: string;
      front_shiny_female: string | null;
      other: {
        dream_world: {
          front_default: string;
          front_female: string | null;
        };
        home: {
          front_default: string;
          front_female: string | null;
          front_shiny: string;
          front_shiny_female: string | null;
        };
        "official-artwork": {
          front_default: string;
          front_shiny: string;
        };
      };
    };
    stats: {
      base_stat: number;
      effort: number;
      stat: {
        name: string;
        url: string;
      };
    }[];
    types: {
      slot: number;
      type: {
        name: string;
        url: string;
      };
    }[];
    weight: number;
}

export interface PokemonData {
    name: string;
    id: number;
    types: {
        slot: number;
        type: {
            name: string;
            url: string;
        };
    }[];
    "official-artwork": string;
}

export interface ApiPokemonTypeList {
  count: number;
  next: null;
  previous: null;
  results: ApiPokemonTypeResult[];
}

export interface ApiPokemonTypeResult {
  name: string;
  url: string;
}

export interface SearchPokemon {
  search: string;
}

export interface ApiPokemonTypeDetails {
  damage_relations: DamageRelations;
  game_indices: GameIndex[];
  generation: Generation;
  id: number;
  move_damage_class: MoveDamageClass;
  moves: Move[];
  name: string;
  names: Name[];
  past_damage_relations: unknown[];
  pokemon: PokemonEntry[];
}

interface DamageRelations {
  double_damage_from: Type[];
  double_damage_to: Type[];
  half_damage_from: Type[];
  half_damage_to: Type[];
  no_damage_from: Type[];
  no_damage_to: Type[];
}

interface Type {
  name: string;
  url: string;
}

interface GameIndex {
  game_index: number;
  generation: Generation;
}

interface Generation {
  name: string;
  url: string;
}

interface MoveDamageClass {
  name: string;
  url: string;
}

interface Move {
  name: string;
  url: string;
}

interface Name {
  language: Language;
  name: string;
}

interface Language {
  name: string;
  url: string;
}

interface PokemonEntry {
  pokemon: Pokemon;
  slot: number;
}

export interface Pokemon {
  name: string;
  url: string;
}

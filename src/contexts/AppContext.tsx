"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { ApiPokemonData, ApiPokemonTypeDetails, ApiPokemonTypeList, AppContextData, Pokemon, PokemonApiResponse, PokemonBasicData, PokemonData, Props } from "./interfaces";
import axios from "axios";

const AppContext = createContext({} as AppContextData);

export function AppProvider({ children, }: Props) {

  const [allPokemonBasicData, setAllPokemonBasicData] = useState<PokemonBasicData[]>([]);
  const [pokemonData, setPokemonData] = useState<PokemonData[] | null>(null);
  const [paginatedPokeCompleteData, setpaginatedPokeCompleteData] = useState<PokemonData[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getAllPokemonBasicData(url = "https://pokeapi.co/api/v2/pokemon/?limit=1000"): Promise<PokemonBasicData[]> {
      let allPokemonData: PokemonBasicData[] = [];
      while (url) {
        const response = await axios.get<PokemonApiResponse>(url);
        const results = response.data.results;
        const newData: PokemonBasicData[] = results.map((pokemon: Pokemon) => {
          const urlParts = pokemon.url.split("/");
          const pokemonId = parseInt(urlParts[urlParts.length - 2]);
          return { name: pokemon.name, id: pokemonId, };
        });
        allPokemonData = [...allPokemonData, ...newData];
        // console.log(1);
        url = response.data.next || "";
        // console.log(2);
      }
      setAllPokemonBasicData(allPokemonData);
      return allPokemonBasicData;
    }
    getAllPokemonBasicData();
  }, []);

  async function getACompletePokeDataByNameOrId(pokemon: string | number) {
    try {
      const response = await axios.get<ApiPokemonData>(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
      const pokemonSelected = response.data;
      const pokeData: PokemonData = {
        name: pokemonSelected.name,
        id: pokemonSelected.id,
        types: pokemonSelected.types,
        "official-artwork": pokemonSelected.sprites.other["official-artwork"].front_default,
      };
      return pokeData;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.response?.data);
      } else {
        console.log(error);
      }
      return null;
    }
  }

  async function getManyPokeCompleteDataByInterval(pokeBasicData: PokemonBasicData[]) {

    try {
      setLoading(true);
      const pokemonDataPromises = pokeBasicData.map((data) => getACompletePokeDataByNameOrId(data.name));
      const pokemonData = await Promise.all(pokemonDataPromises) as unknown as PokemonData[];
      setpaginatedPokeCompleteData([...paginatedPokeCompleteData, ...pokemonData]);
      setLoading(false);
    } catch (error) {
      console.log("Error fetching Pokémon data:", error);
    }
  }

  async function groupPokemonByType(type: string) {
    try {
      const allTypesResponse = await axios.get<ApiPokemonTypeList>("https://pokeapi.co/api/v2/type/");
      const allPokemonTypes = allTypesResponse.data.results;
      const matchingType = allPokemonTypes.find((pokemonType) => pokemonType.name === type);
      if (!matchingType) {
        console.log(`Type "${type}" not found.`);
        return;
      }
      const typeDetailsResponse = await axios.get<ApiPokemonTypeDetails>(matchingType.url);
      const allPokemonFromThisType = typeDetailsResponse.data.pokemon;
      const filteredPokemonsData: PokemonData[] = [];
      for (const pokemonEntry of allPokemonFromThisType) {
        const pokemonResponse = await axios.get<ApiPokemonData>(pokemonEntry.pokemon.url);
        const pokemonSelected = pokemonResponse.data;
        const filteredData: PokemonData = {
          name: pokemonSelected.name,
          id: pokemonSelected.id,
          types: pokemonSelected.types,
          "official-artwork": pokemonSelected.sprites.other["official-artwork"].front_default,
        };
        filteredPokemonsData.push(filteredData);
      }
      setpaginatedPokeCompleteData(filteredPokemonsData);
    } catch (error) {
      console.log("Error fetching Pokémon data:", error);
    }
  }

  return (
    <AppContext.Provider
      value={{
        loading, setLoading,
        allPokemonBasicData, setAllPokemonBasicData,
        pokemonData, setPokemonData,
        paginatedPokeCompleteData, setpaginatedPokeCompleteData,
        getACompletePokeDataByNameOrId,
        getManyPokeCompleteDataByInterval,
        groupPokemonByType,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => useContext(AppContext);

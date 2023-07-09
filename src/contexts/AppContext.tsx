"use client";
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { ApiPokemonData, ApiPokemonTypeDetails, ApiPokemonTypeList, AppContextData, Pokemon, PokemonApiResponse, PokemonData, Props } from "./interfaces";

const AppContext = createContext({} as AppContextData);

export function AppProvider({ children, }: Props) {
  const [pokemonNames, setPokemonNames] = useState<string[]>([]);
  const [pokemonData, setPokemonData] = useState<PokemonData | null>(null);
  const [filteredPokemons, setFilteredPokemons] = useState<PokemonData[]>([]);

  useEffect(() => {
    getAllPokemonNames();
    getPokemonByNameOrId("bulbasaur");
  }, []);

  async function getAllPokemonNames(url = "https://pokeapi.co/api/v2/pokemon/", pokemonNames: string[] = []) {
    await axios.get<PokemonApiResponse>(`${url}?limit=1000`)
      .then((response) => {
        const results = response.data.results;
        const newPokemonNames = results.map((pokemon: Pokemon) => pokemon.name);
        setPokemonNames(prevPokemonNames => [...prevPokemonNames, ...newPokemonNames].sort());
        const nextUrl = response.data.next;
        if (nextUrl) {
          return getAllPokemonNames(nextUrl);
        }
      })
      .catch((error) => {
        console.log(error.response.data);
      });
    return pokemonNames;
  }

  async function getPokemonByNameOrId(pokemon: string) {
    axios.get<ApiPokemonData>(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then((response) => {
        const pokemonSelected = response.data;
        const pokemonData = {
          name: pokemonSelected.name,
          id: pokemonSelected.id,
          types: pokemonSelected.types,
          "official-artwork": pokemonSelected.sprites.other["official-artwork"].front_default,
        };
        setPokemonData(pokemonData);
      })
      .catch((error) => {
        setPokemonData(null);
        console.log(error.response.data);
      });
  }

  async function getPokemonByType(type: string) {
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
      setFilteredPokemons(filteredPokemonsData);
    } catch (error) {
      console.log("Error fetching Pokémon data:", error);
    }
  }

  return (
    <AppContext.Provider
      value={{
        getAllPokemonNames,
        pokemonNames,
        setPokemonNames,
        pokemonData,
        setPokemonData,
        getPokemonByNameOrId,
        getPokemonByType,
        filteredPokemons, setFilteredPokemons,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => useContext(AppContext);

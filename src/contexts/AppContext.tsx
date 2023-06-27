"use client";
import axios from "axios";
import { createContext, useContext, useState } from "react";
import { ApiPokemonData, ApiPokemonTypeDetails, ApiPokemonTypeList, AppContextData, PokemonData, Props } from "./interfaces";

const AppContext = createContext({} as AppContextData);

export function AppProvider({ children, }: Props) {
  const [ pokemonData, setPokemonData ] = useState<PokemonData | null>(null);
  const [filteredPokemons, setFilteredPokemons] = useState<PokemonData[]>([]);

  // async function getAllPokemon() {
  //   axios.get<any>("https://pokeapi.co/api/v2/pokemon/?limit=100&offset=100")
  //     .then((response) => {
  //       const pokemonSelected = response.data;
  //       console.log(pokemonSelected);
  //       // console.log(pokemonSelected.name);
  //       // console.log(pokemonSelected.id);
  //       // console.log(pokemonSelected.types);

  //       // const filteredData = {
  //       //   name: pokemonSelected.name,
  //       //   id: pokemonSelected.id,
  //       //   types: pokemonSelected.types,
  //       //   "official-artwork": pokemonSelected.sprites.other["official-artwork"].front_default,
  //       // };
  //       // setPokemonData(filteredData);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       console.log(error.response.data);
  //     });
  // }
  // getAllPokemon();


  async function getPokemon(pokemon: string) {
    axios.get<ApiPokemonData>(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then((response) => {
        const pokemonSelected = response.data;
        const filteredData = {
          name: pokemonSelected.name,
          id: pokemonSelected.id,
          types: pokemonSelected.types,
          "official-artwork": pokemonSelected.sprites.other["official-artwork"].front_default,
        };
        setPokemonData(filteredData);
      })
      .catch((error) => {
        console.log(error.response.data);
        setPokemonData(null);
      });
  }
  // getPokemon("bulbasaur");

  async function getAllPokemonTypes() {
    axios.get<ApiPokemonTypeList>("https://pokeapi.co/api/v2/type/")
      .then((response) => {
        const allPokemonTypes = response.data.results;
        // console.log({allPokemontypes});
        allPokemonTypes.forEach(type => {
          console.log(type.name, type.url);
        });
      })
      .catch((error) => {
        console.log(error);
        console.log(error.response.data);
      });
  }
  // getAllPokemonTypes();

  async function getOneSpecificType(URL: string) {
    axios.get<ApiPokemonTypeDetails>(`${URL}`)
      .then((response) => {
        const allPokemonFromThisType = response.data.pokemon;
        console.log(allPokemonFromThisType);
        allPokemonFromThisType.forEach(pokemon => {
          console.log(pokemon.pokemon.name, pokemon.pokemon.url);
        });
      })
      .catch((error) => {
        console.log(error);
        console.log(error.response.data);
      });
  }
  // getOneSpecificType("https://pokeapi.co/api/v2/type/5/");

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
        // const pokemonName = pokemonEntry.pokemon.name;
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
      console.log(filteredPokemonsData);
      // setFilteredPokemons(filteredPokemonsData);
    } catch (error) {
      console.log("Error fetching Pokémon data:", error);
    }
  }
  // getPokemonByType("psychic");

  return (
    <AppContext.Provider
      value={{
        pokemonData,
        setPokemonData,
        getPokemon,
        getAllPokemonTypes,
        getOneSpecificType,

        getPokemonByType,
        filteredPokemons, setFilteredPokemons,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => useContext(AppContext);

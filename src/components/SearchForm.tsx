import Button from "@/components/Button";
import Input from "@/components/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { searchSchema } from "../schema/search.schema";
import { useApp } from "@/contexts/AppContext";
import { PokemonData, SearchManyPokemon } from "@/contexts/interfaces";
import { FiSearch } from "react-icons/fi";
import { useEffect } from "react";

export default function SearchForm() {

  const { allPokemonBasicData, setPokemonData, getACompletePokeDataByNameOrId, } = useApp();
  const { handleSubmit, watch, control, } = useForm<SearchManyPokemon>({
    mode: "onSubmit",
    resolver: zodResolver(searchSchema),
  });

  const searchWatch = watch("search");

  const submitForm = async (data: SearchManyPokemon) => {
    const finalData = data.search.map((field) => (field.value.toLowerCase()));
    setPokemonData(null);
    const allSearchedData: PokemonData[] = [];
    for (const value of finalData) {
      const searchedData = await getACompletePokeDataByNameOrId(value);
      if (searchedData !== null) {
        allSearchedData.push(searchedData);
      }
    }
    setPokemonData(allSearchedData);
  };

  useEffect(() => {
    //console.log(searchWatch);
  }, [searchWatch]);

  const sortPokeById = [...allPokemonBasicData].sort((a, b) => a.id - b.id);
  const firstPokeData = sortPokeById.map(pokemon => ({
    value: pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1),
    label: pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1) + ` - Nº ${pokemon.id}`,
  }));

  return (
    <form
      onSubmit={handleSubmit(submitForm)}
      className="flex h-[48px] w-[100%] justify-between mr-1"
    >

      <Input
        type="select-searchable"
        placeholder="POKÉMON"
        name="search"
        options={firstPokeData}
        label=""
        control={control}
        id="selectSearchableId"
      />

      <Button type="submit" style="search" details="" size="medium">
        <FiSearch />
      </Button>

    </form>
  );
}

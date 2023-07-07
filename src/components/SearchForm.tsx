import Button from "@/components/Button";
import Input from "@/components/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { searchSchema } from "../schema/search.schema";
import { useApp } from "@/contexts/AppContext";
import { SearchPokemon } from "@/contexts/interfaces";
import { FiSearch } from "react-icons/fi";

export default function SearchForm() {

  const { pokemonNames, getPokemonByNameOrId, } = useApp();
  const { register, handleSubmit, formState: { errors, }, } = useForm<SearchPokemon>({
    resolver: zodResolver(searchSchema),
  });

  const submitForm = async (data: SearchPokemon) => {
    await getPokemonByNameOrId(data.search.toLocaleLowerCase());
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLFormElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSubmit(submitForm)();
    }
  };

  return (
    <form
      onSubmit={handleSubmit(submitForm)}
      onKeyDown={handleKeyDown}
      className="flex h-[48px] w-[100%] justify-between mr-1"
    >

      <Input
        type="select"
        name="search"
        label=""
        placeholder="Digitar Marca"
        register={register("search")}
        errors={errors.search}
      >
        <option value="">POKÉMON</option>
        {pokemonNames.map((search) => (
          <option key={search} className="capitalize" value={search}>
            {search}
          </option>
        ))}
      </Input>


      <Button type="submit" style="search" details="" size="medium">
        <FiSearch />
      </Button>

    </form>
  );
}

"use client";
import { useForm } from "react-hook-form";
import Input from "../components/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { searchSchema } from "../schema/search.schema";
import Button from "@/components/Button";
import CardsContainer from "./CardsContainer";
import { useApp } from "@/contexts/AppContext";
import { SearchPokemon } from "@/contexts/interfaces";
import { FiSearch } from "react-icons/fi";
// import { useEffect } from "react";

export default function SectionB() {
  const { getPokemon, } = useApp();
  const { register, handleSubmit, formState: { errors, },} = useForm<SearchPokemon>({
    resolver: zodResolver(searchSchema),
  });

  async function submitForm(data: SearchPokemon) {
    await getPokemon(data.search.toLocaleLowerCase());
  }

  // const searchValue: string = watch("search");
  // console.log(searchValue);

  // useEffect(() => {
  //   console.log(searchValue);
  // }, [searchValue]);

  function getAllPokemon() {
    // console.log("Chamar todos Pokémon");
    // console.log(searchValue);
    // getPokemon(searchValue);
  }

  return (
    <section
      id="starSection"
      className="
      flex
      justify-center
      bg-top
      bg-no-repeat
      w-full
      bg-brand-0
    "
    >



      <article
        className="
        w-[100%]
        max-w-[1200px]
        bg-top
        bg-no-repeat
       bg-white
        flex
        flex-col
        justify-start
        items-center
        pb-[100px]
        ">

        <h1 className="font-black text-3xl mt-12 text-brand-0">PokéBusca</h1>

        <div className="flex h-[48px] w-[90%] justify-between mt-8">
          <form onSubmit={handleSubmit(submitForm)} className="flex h-[48px] w-[90%] justify-between">
            <div className="-m-1 w-full">
              <Input
                id="search"
                type="text"
                name="search"
                label=""
                placeholder="Nome ou Nº"
                register={register("search")}
                errors={errors.search}
              />
            </div>
            <Button type="submit" style="search" details="" size="medium"><FiSearch/></Button>
          </form>
          <Button onClick={getAllPokemon} type="button" style="searchAll" details="" size="medium">TODOS</Button>
        </div>

        <div className="flex w-[90%] justify-between mt-8 320:h-[420px] 321:h-[460px]  370:h-[480px] 405:h-[530px] ">
          <CardsContainer/>
        </div>

      </article>



    </section>
  );
}

"use client";
import { useApp } from "@/contexts/AppContext";
import Button from "./Button";
import CardsContainer from "./CardsContainer";
import SearchForm from "./SearchForm";

export default function SectionB() {

  const { setPokemonData, } = useApp();

  function getAllPokemon() {
    setPokemonData([]);
  }

  return (
    <section id="starSection" className=" flex justify-center bg-top bg-no-repeat w-full bg-brand-0">
      <article className=" w-[100%] max-w-[1200px] bg-top bg-no-repeat bg-white flex flex-col justify-start items-center pb-[100px] ">
        <h1 className="font-black text-3xl mt-12 text-brand-0">PokéBusca</h1>
        <div className="flex h-[48px] w-[90%] justify-between mt-8">
          <SearchForm/>
          <Button hiddenOnSmallScreens={false} onClick={getAllPokemon} type="button" style="searchAll" details="" size="medium">TODOS</Button>
        </div>
        <div className="flex w-[90%] justify-between mt-8 320:h-[420px] 321:h-[460px]  370:h-[480px] 405:h-[530px] ">
          <CardsContainer/>
        </div>
      </article>
    </section>
  );
}

"use client";
import { useApp } from "@/contexts/AppContext";
import CardPoke from "./CardPoke";
// import { useMediaQuery } from "react-responsive";

export default function CardsContainer() {

  const { pokemonData, } = useApp();

  // const isSmallScreen = useMediaQuery({ query: "(min-width: 220px)", });
  // const isLargeScreen = useMediaQuery({ query: "(min-width: 1024px)", });

  const pokemonId = pokemonData?.id;
  const pokemonName = pokemonData?.name;
  const pokemonArtwork = pokemonData?.["official-artwork"];
  const pokemonTypeA = pokemonData?.types[0].type.name;
  const pokemonTypeB = (pokemonData?.types[1]) ? (pokemonData?.types[1].type.name) : "";

  return (
    <ul className="flex justify-center mt-2 bg-grey-8 w-full rounded-[16px] border-2 border-brand-0 p-8 ">
      <CardPoke pokemonId={pokemonId} pokemonName={pokemonName} pokemonArtwork={pokemonArtwork} pokemonTypeA={pokemonTypeA} pokemonTypeB={pokemonTypeB}/>
    </ul>
  );
}

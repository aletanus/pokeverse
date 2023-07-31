
import React, { useEffect, useRef, useState } from "react";
import { useApp } from "@/contexts/AppContext";
import CardPoke from "./CardPoke";

export default function CardsContainer() {
  const {
    allPokemonBasicData,
    getManyPokeCompleteDataByInterval,
    paginatedPokeCompleteData,
    loading,
    pokemonData,
  } = useApp();

  const [count, setCount] = useState(0);
  const [reachedEnd, setReachedEnd] = useState(false);

  const observer = useRef<IntersectionObserver | null>(null);
  const lastCardRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (loading) return;

    if (count === 0) {
      const first20Pokemons = allPokemonBasicData.slice(0, 20);
      getManyPokeCompleteDataByInterval(first20Pokemons);
      setCount(first20Pokemons.length);
    }

    if (!reachedEnd && typeof window !== "undefined") {
      observer.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && !reachedEnd) {
            let next20Pokemon;
            if (allPokemonBasicData.length - count >= 20) {
              next20Pokemon = allPokemonBasicData.slice(count, count + 20);
            } else {
              next20Pokemon = allPokemonBasicData.slice(count, allPokemonBasicData.length);
              setReachedEnd(true);
            }
            getManyPokeCompleteDataByInterval(next20Pokemon);
            setCount(count + next20Pokemon.length);
          }
        },
        {
          root: null,
          threshold: 0.1,
        }
      );

      if (lastCardRef.current) {
        observer.current.observe(lastCardRef.current);
      }
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };

  }, [allPokemonBasicData, paginatedPokeCompleteData, getManyPokeCompleteDataByInterval, loading, count, reachedEnd]);

  // console.log(allPokemonBasicData.length);

  return (
    <ul className="flex justify-center mt-2 bg-grey-8 w-full rounded-[16px] border-2 border-brand-0 p-1 320:px-0">
      <div className="flex justify-start gap-6 overflow-x-auto scrollbar-track mt-1 bg-grey-8 w-full border-1 rounded-[16px] p-8 ">
        {
          pokemonData?.length? (
            pokemonData?.map((poke) => (
              <CardPoke key={poke.id} pokemonId={poke.id} pokemonName={poke.name} pokemonArtwork={poke["official-artwork"]} pokemonTypeA={poke.types[0].type.name} pokemonTypeB={poke.types[1] ? poke.types[1].type.name : undefined}/>
            ))
          ) : (
            paginatedPokeCompleteData.map((poke, index) => (
              <CardPoke
                key={poke.id}
                pokemonId={poke.id}
                pokemonName={poke.name}
                pokemonArtwork={poke["official-artwork"]}
                pokemonTypeA={poke.types[0].type.name}
                pokemonTypeB={poke.types[1] ? poke.types[1].type.name : undefined}
                ref={index === paginatedPokeCompleteData.length - 1 ? lastCardRef : null}
              />
            ))
          )
        }
        <li>{loading && "Loading"}</li>
      </div>
    </ul>
  );
}

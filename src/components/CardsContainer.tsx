"use client";
import { useApp } from "@/contexts/AppContext";
import { FiSearch } from "react-icons/fi";

export default function CardsContainer() {

  const { pokemonData, } = useApp();

  function capitalizeFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

  const pokemonId = pokemonData?.id;
  const pokemonName = pokemonData?.name;
  const pokemonArtwork = pokemonData?.["official-artwork"];
  const pokemonTypeA = pokemonData?.types[0].type.name;
  const pokemonTypeB = (pokemonData?.types[1]) ? (pokemonData?.types[1].type.name) : "";

  return (

    <ul className="flex justify-center mt-2 bg-grey-8 w-full rounded-[16px] border-2 border-brand-0 p-8 ">
      { pokemonData ? (
        <li className="shadow-lg flex flex-col justify-between min-w-[200px] max-w-xs min-h-[300px] bg-grey-8 rounded-[12px] border-2  p-4 hover:bg-lime-50 hover:border-violet-200 animate-pulseCard hover:animate-pausedCard">
          <img className="flex justify-center w-fit bg-brand-6 rounded-[10px]" src={ pokemonArtwork } alt={ pokemonName }/>
          <div>
            <div className="flex justify-between rounded-[4px] p-2">
              <p className="font-semibold pr-[4px] text-brand-0">{ `nº ${ pokemonId }` }</p>
              <button className="font-semibold bg-lime-400 text-gray-800 pl-2 pr-2 lg:pl-6 lg:pr-6 rounded-[4px]">{ pokemonTypeA ? capitalizeFirstLetter(pokemonTypeA) : "" }</button>
            </div>
            <div className="flex justify-between rounded-[4px] p-2">
              <p className="font-black pr-[4px] text-lg text-brand-0">{ pokemonName ? capitalizeFirstLetter(pokemonName) : "" }</p>
              <button className={`font-semibold bg-red-400 text-gray-100 pl-2 pr-2 lg:pl-6 lg:pr-6 rounded-[4px] ${pokemonTypeB ? "" : "hidden"}`}>{ pokemonTypeB ? capitalizeFirstLetter(pokemonTypeB) : "" }</button>
            </div>
          </div>
        </li>
      ) : <li className="shadow-lg flex flex-col justify-between items-center min-w-[200px] max-w-xs w-[360px] min-h-[300px] border-orange-400 bg-slate-50 rounded-[12px] border-2 p-4 animate-pulseCard">
        <FiSearch className="flex flex-col justify-between min-w-[98%] max-w-xs h-[280px] border-orange-100 bg-orange-100 text-orange-200 rounded-[12px] border-2 p-4"/>
        <div>
          <div className="flex justify-between rounded-[4px] p-2">
            <p className="font-semibold pr-[4px] text-orange-500">nº 0</p>
            <button className={`font-semibold bg-violet-100 text-violet-100 pl-2 pr-2 lg:pl-6 lg:pr-6 rounded-[4px] ${pokemonTypeB ? "" : "hidden"}`}>Xxxxxx</button>
          </div>
          <div className="flex justify-between rounded-[4px] p-2">
            <p className="font-black pr-[4px] text-lg text-orange-500">Procure um Pokémon</p>
            <button className={`font-semibold bg-red-400 text-gray-100 pl-2 pr-2 lg:pl-6 lg:pr-6 rounded-[4px] ${pokemonTypeB ? "" : "hidden"}`}>Xxxxxx</button>
          </div>
        </div>
      </li>
      }
    </ul>

  );
}

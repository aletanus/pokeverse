import { FiSearch } from "react-icons/fi";

interface PokeNotFoundProps {
  pokemonTypeB: string | undefined
}

export default function CardPokeNotFound({ pokemonTypeB, }:PokeNotFoundProps) {

  return (
    <li className="shadow-lg flex flex-col justify-between items-center min-w-[200px] max-w-xs w-[360px] min-h-[300px] border-orange-400 bg-slate-50 rounded-[12px] border-2 p-4 animate-pulseCard">
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
  );
}

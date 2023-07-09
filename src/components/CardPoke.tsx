import CardPokeNotFound from "./CardPokeNotFound";

interface CardPokeProps {
  pokemonId: number | undefined
  pokemonName: string | undefined
  pokemonArtwork: string | undefined
  pokemonTypeA: string | undefined
  pokemonTypeB: string | undefined

}

export default function CardPoké({ pokemonId, pokemonName, pokemonArtwork, pokemonTypeA, pokemonTypeB,}:CardPokeProps ) {

  function capitalizeFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

  return (
    pokemonId ? (<li className="shadow-lg flex flex-col justify-between min-w-[200px] max-w-xs min-h-[300px] bg-grey-8 rounded-[12px] border-2  p-4 hover:bg-lime-50 hover:border-violet-200 animate-pulseCard hover:animate-pausedCard">
      <img className="flex justify-center w-fit bg-brand-6 rounded-[10px]" src={ pokemonArtwork } alt={ pokemonName }/>
      <div>
        <div className="flex justify-between rounded-[4px] p-2">
          <p className="font-semibold pr-[4px] text-brand-0">{ `nº ${ pokemonId }` }</p>
          <button className="font-semibold h-8 bg-lime-400 text-gray-800 pl-2 pr-2 lg:pl-6 lg:pr-6 rounded-[4px]">{ pokemonTypeA ? capitalizeFirstLetter(pokemonTypeA) : "" }</button>
        </div>
        <div className="flex justify-between rounded-[4px] p-2">
          <p className="font-black pr-[4px] text-lg text-brand-0">{ pokemonName ? capitalizeFirstLetter(pokemonName) : "" }</p>
          <button className={`font-semibold h-8 bg-red-400 text-gray-100 pl-2 pr-2 lg:pl-6 lg:pr-6 rounded-[4px] ${pokemonTypeB ? "" : "hidden"}`}>{ pokemonTypeB ? capitalizeFirstLetter(pokemonTypeB) : "" }</button>
        </div>
      </div>
    </li>) : <CardPokeNotFound pokemonTypeB={pokemonTypeB}/>
  );
}

import React, { forwardRef } from "react";
import CardPokeNotFound from "./CardPokeNotFound";

interface CardPokeProps {
  pokemonId: number | undefined;
  pokemonName: string | undefined;
  pokemonArtwork: string | undefined;
  pokemonTypeA: string | undefined;
  pokemonTypeB: string | undefined;
}

const CardPoke = forwardRef<HTMLLIElement, CardPokeProps>(
  (props, ref) => {
    function capitalizeFirstLetter(str: string): string {
      return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }

    return props.pokemonId ? (
      <li
        ref={ref as React.Ref<HTMLLIElement>}
        className="shadow-lg flex flex-col justify-between 320:min-w-[220px] 321:min-w-[230px] 350:min-w-[240px] 370:min-w-[250px] 390:min-w-[260px] 405:min-w-[285px] min-h-[300px] bg-grey-8 rounded-[12px] border-2  p-4 hover:bg-lime-50 hover:border-violet-200 animate-pulseCard hover:animate-pausedCard"
      >
        <img
          className="flex justify-center max-h-[73%] w-fit bg-brand-6 rounded-[10px]"
          src={props.pokemonArtwork}
          alt={props.pokemonName}
        />
        <div>
          <div className="flex justify-between rounded-[4px] p-2">
            <p className="font-semibold pr-[4px] text-brand-0">
              {`nº ${props.pokemonId}`}
            </p>
            <button className="font-semibold h-8 bg-lime-400 text-gray-800 pl-2 pr-2 lg:pl-6 lg:pr-6 rounded-[4px]">
              {props.pokemonTypeA
                ? capitalizeFirstLetter(props.pokemonTypeA)
                : ""}
            </button>
          </div>
          <div className="flex justify-between rounded-[4px] p-2">
            <p className="font-black pr-[4px] text-lg text-brand-0">
              {props.pokemonName
                ? capitalizeFirstLetter(props.pokemonName)
                : ""}
            </p>
            <button
              className={`font-semibold h-8 bg-red-400 text-gray-100 pl-2 pr-2 lg:pl-6 lg:pr-6 rounded-[4px] ${
                props.pokemonTypeB ? "" : "hidden"
              }`}
            >
              {props.pokemonTypeB
                ? capitalizeFirstLetter(props.pokemonTypeB)
                : ""}
            </button>
          </div>
        </div>
      </li>
    ) : (
      <CardPokeNotFound pokemonTypeB={props.pokemonTypeB} />
    );
  }
);

export default CardPoke;

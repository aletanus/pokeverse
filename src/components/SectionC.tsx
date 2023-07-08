"use client";
import { MyResponsivePie } from "../components/PieChart";

export default function SectionC() {

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
        <h2
          className="
            absolute 1201:hidden
            -ml-[800px] transform
            skew-y-angled font-black
            text-2xl mt-16 text-brand-0
          ">
            Total de Pokémon por TIPO:
        </h2>
        <div
          className="
            flex flex-col w-[90%]
            mt-32 320:h-[190px]
            321:h-[190px] 370:h-[235px]
            405:h-[270px] 450:h-[310px]
            480:h-[335px] 520:h-[370px]
            560:h-[410px] 600:h-[460px]
            700:h-[520px] 750:h-[580px]
            800:h-[630px]"
        >
          <MyResponsivePie/>
        </div>

      </article>

    </section>
  );
}

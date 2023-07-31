"use client";
import { MyResponsivePie } from "../components/PieChart";

export default function SectionC() {

  return (
    <section id="GraphicSection" className=" flex justify-center bg-top bg-no-repeat w-full bg-brand-0">
      <article className=" w-[100%] max-w-[1200px] bg-top bg-no-repeat bg-white flex flex-col items-center pb-[100px]">

        <h2 className="w-[90%] font-black text-3xl text-brand-0 text-center px-0">
          Distribuição de Pokémon por Tipo:
        </h2>
        <div className=" flex flex-col w-[90%] mt-12 320:h-[220px] 321:h-[220px] 370:h-[265px] 390:h-[285px] 450:h-[310px] 480:h-[335px] 520:h-[370px] 560:h-[410px] 600:h-[460px] 700:h-[520px] 750:h-[580px] 800:h-[630px]">
          <MyResponsivePie/>
        </div>

      </article>
    </section>
  );
}

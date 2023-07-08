"use client";
import Footer from "@/components/Footer";
import SectionA from "@/components/SectionA";
import SectionB from "@/components/SectionB";
import SectionC from "@/components/SectionC";

export default function Home() {

  return (

    <main className="relative">

      <SectionA/>

      <div
        className="
          absolute top-[1340px]
          flex justify-center
          items-center w-full
          h-150 bg-brand-0
          transform skew-y-angled
          "
      >
        <img
          className="max-h-[50%] max-w-[70%]"
          src="/images/Logo - PokeVerso.png"
          alt="Logo PokéVerso"
        />
      </div>

      <h2 className="absolute top-[1460px] 600:top-[1480px] 800:top-[1490px] 950:top-[1500px] 1200:hidden pl-5 transform skew-y-angled font-black text-2xl mt-16 text-brand-0">Total de Pokémon por TIPO:</h2>

      <SectionC/>
      <SectionB/>
      <Footer/>
    </main>

  );
}

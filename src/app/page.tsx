"use client";
import Footer from "@/components/Footer";
import SectionA from "@/components/SectionA";
import SectionB from "@/components/SectionB";
import SectionC from "@/components/SectionC";

export default function Home() {

  return (

    <main className="relative">
      <SectionA/>
      <div className=" absolute top-[1340px] flex justify-center items-center w-full h-150 bg-brand-0 transform skew-y-angled">
        <img className="max-h-[50%] max-w-[70%]" src="/images/Logo - PokeVerso.png" alt="Logo PokéVerso"/>
      </div>
      <SectionB/>
      <SectionC/>
      <Footer/>
    </main>

  );
}

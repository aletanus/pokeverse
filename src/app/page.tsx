"use client";
import Footer from "@/components/Footer";
import SectionA from "@/components/SectionA";
import SectionB from "@/components/SectionB";
import SectionC from "@/components/SectionC";
import { useEffect } from "react";

const originalConsoleError = console.error;
console.error = (...args) => {
  const errorMessage = args[0] || "";
  const suppressedErrorText = "Support for defaultProps will be removed from function components";
  if (!errorMessage.includes(suppressedErrorText)) {
    originalConsoleError.apply(console, args);
  }
};

export default function Home() {

  useEffect(() => {
    return () => {
      console.error = originalConsoleError;
    };
  }, []);

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

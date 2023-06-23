"use client";
import Header from "@/components/Header";

export default function Home() {
  return (

    <main className="relative">

      <section className="hidden 559:block">
        <Header />
        <div
          className="
            bg-pokeworldBackgroundOne
            bg-top
            bg-no-repeat
            h-1500
            sm:w-full
            w-full
            bg-brand-0
          "
        ></div>
      </section>

      <section className="hidden 560:block">
        <div
          className="
            bg-pokeworldBackground
            bg-top
            bg-no-repeat
            h-1500
            sm:w-full
            w-full
            bg-brand-0
          "
        >
        </div>
      </section>

      <div className="absolute flex justify-center items-center bottom-1500 w-full h-150 bg-brand-0 transform skew-y-angled">
        <img
          className="max-h-[50%]"
          src="/images/Logo - PokeVerso.png"
          alt="Logo PokéVerso"
        />
      </div>

      <section
        className="
          flex
          justify-center
          bg-top
          bg-no-repeat
          h-1500
          w-full
          bg-brand-0
        "
      >
        <article
          className="
          w-1200
          bg-top
          bg-no-repeat
          h-1500
          bg-white
        "
        ></article>
      </section>

    </main>
  );
}

"use client";

export default function Header() {
  return (
    <>
      <header className="absolute top-[80px]">
        <div className="flex justify-center">
          <img
            className="md:w-auto md:max-w-[48%] lg:max-w-[48%] xl:max-w-[48%]"
            src="/images/Logo - PokeVerso.png"
            alt="Logo PokéVerso"
          />
        </div>
      </header>
    </>
  );
}

// "use client";
import "./globals.css";
import { Inter, Lexend } from "next/font/google";
import AnimationComponent from "../components/Animation";
import { AppProvider } from "@/contexts/AppContext";
// import { useEffect } from "react";

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-lexend",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "PokéVerso",
  description: "O futuro Pokémon começa no PokéVerso",
};

// const originalConsoleError = console.error;
// console.error = (...args) => {
//   const errorMessage = args[0] || "";
//   const suppressedErrorText = "Support for defaultProps will be removed from function components";
//   if (!errorMessage.includes(suppressedErrorText)) {
//     originalConsoleError.apply(console, args);
//   }
// };

export default function RootLayout({ children, }: { children: React.ReactNode }) {

  // useEffect(() => {
  //   return () => {
  //     console.error = originalConsoleError;
  //   };
  // }, []);

  return (
    <html lang="pt-br">

      <body className= {`${lexend.variable} ${inter.className}
        flex-col
        h-auto
        justify-center
        overflow-x-hidden
        scrollbar-thin
       scrollbar-thumb-brand-3/90
       scrollbar-track-grey-whiteFixed`
      }>
        <AnimationComponent/>
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}

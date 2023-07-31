import "./globals.css";
import { Inter, Lexend } from "next/font/google";
import AnimationComponent from "../components/Animation";
import { AppProvider } from "@/contexts/AppContext";

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

export default function RootLayout({ children, }: { children: React.ReactNode }) {

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

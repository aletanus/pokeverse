import "./globals.css";
import { Inter, Lexend } from "next/font/google";
import AnimationComponent from "../components/Animation";

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
  title: "PokéVerse",
  description: "O futuro Pokémon começa no PokéVerse",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className= {`${lexend.variable} ${inter.className}`}>
        <AnimationComponent/>
        {children}
      </body>
    </html>
  );
}

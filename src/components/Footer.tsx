"use client";
import Image from "next/image";
import logo from "../../public/images/Alta-Logo.png";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth", });
  const handleClick = () => {
    window.location.href = "https://github.com/aletanus";
  };
  return (
    <footer
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
      <div className="w-[100%] max-w-[1200px] bg-grey-6 text-grey-whiteFixed flex flex-col items-center jusitfy-center py-11 px-2 gap-14 md:px-16 md:py-6 md:flex-row md:justify-between">
        <div className=" bg-grey-6 text-grey-whiteFixed flex flex-col items-center jusitfy-center gap-6 md:px-16 md:py-4 md:flex-row md:justify-between">
          <a className="w-[55px] border border-brand-0 shadow-lg rounded-full animate-iconGrow hover:scale-125 transition-transform duration-300" href="https://github.com/aletanus" target="_blank" rel="noopener noreferrer" onClick={handleClick}>
            <Image src={logo} alt="logo"/>
          </a>
          <p className="body-2-400 text-brand-0"> Desenvolvido por <span className="font-bold">Alessandro Tanus</span>.</p>
        </div>
        <BsFillArrowUpCircleFill onClick={scrollToTop} className="w-[40px] h-[40px] text-brand-0 hover:scale-125 transition-transform duration-300"/>
      </div>
    </footer>
  );
}

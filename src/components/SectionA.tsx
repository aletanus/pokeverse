"use client";
import Button from "@/components/Button";
import Header from "@/components/Header";
import { animateScroll as scroll } from "react-scroll";

export default function SectionA() {
  return (
    <section>

      <div className="hidden 559:block">

        <Header/>

        <div
          className="
              flex
              flex-col
              items-center
              bg-pokeworldBackgroundOne
              bg-top
              bg-no-repeat
              h-1500
              sm:w-full
              w-full
              bg-brand-0
            "
        >

          <div className="mt-64 animate-pulse">
            <Button
              type="button"
              size="start"
              style="start"
              onClick={() => {
                const starSection = document.getElementById("starSection");
                if (starSection) {
                  const offsetTop = starSection.offsetTop;
                  scroll.scrollTo(offsetTop - 220, {
                    smooth: true,
                    duration: 500,
                    top: 100,
                  });
                }
              }}
            >
                START
            </Button>
          </div>
        </div>
      </div>

      <div className="hidden 560:block">
        <div
          className="
              flex
              flex-col
              items-center
              bg-pokeworldBackground
              bg-top
              bg-no-repeat
              h-1500
              sm:w-full
              w-full
              bg-brand-0
            "
        >
          <div className="mt-72 animate-pulse">
            <Button
              type="button"
              size="start"
              style="start"
              onClick={() => {
                const starSection = document.getElementById("starSection");
                if (starSection) {
                  const offsetTop = starSection.offsetTop;
                  scroll.scrollTo(offsetTop - 185, {
                    smooth: true,
                    duration: 500,
                    top: 100,
                  });
                }
              }}
            >
                START
            </Button>
          </div>
        </div>
      </div>

    </section>
  );
}

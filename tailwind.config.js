/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      skew: {
        angled: "-5deg",
      },
      spacing: {
        1500: "1500px",
      },
      inset: {
        1500: "1500px",
      },
      screens: {
        320: {
          max: "320px",
        },
        321: {
          min: "321px",
        },
        350: {
          min: "350px",
        },
        370: {
          min: "370px",
        },
        390: {
          min: "390px",
        },
        405: {
          min: "405px",
        },
        450: {
          min: "450px",
        },
        480: {
          min: "480px",
        },
        520: {
          min: "520px",
        },
        559: {
          max: "559px",
        },
        560: "560px",
        600: {
          min: "600px",
        },
        700: {
          min: "700px",
        },
        750: {
          min: "750px",
        },
        800: {
          min: "800px",
        },
        950: {
          min: "950px",
        },
        1200: {
          min: "1200px",
        },
        1201: {
          max: "1201px",
        },
      },
      height: {
        150: "150px",
        1500: "1500px",
      },
      width: {
        1200: "1200px",
      },
      backgroundImage: {
        pokeworldBackgroundOne: "url('../../public/images/PokePlanet-0.png')",
        pokeworldBackground: "url('../../public/images/PokePlanet.png')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        brand: {
          0: "#726B8E",
          1: "#4529E6",
          2: "#5126EA",
          3: "#B0A6F0",
          4: "#EDEAFD",
          5: "#CACAEF",
          6: "#B7DBAE",
        },
        grey: {
          0: "#0B0D0D",
          1: "#212529",
          2: "#495057",
          3: "#868E96",
          4: "#ADB5BD",
          5: "#CED4DA",
          6: "#DEE2E6",
          7: "#E9ECEF",
          8: "#F1F3F5",
          9: "#F8F9FA",
          10: "#FDFDFD",
          whiteFixed: "#FFFFFF",
        },
        feedback: {
          "alert-1": "#CD2B31",
          "alert-2": "#FDD8D8",
          "alert-3": "#FFE5E5",
          "success-1": "#18794E",
          "success-2": "#CCEBD7",
          "success-3": "#DDF3E4",
        },
        "random-profile": {
          1: "#E34D8C",
          2: "#C04277",
          3: "#7D2A4D",
          4: "#7000FF",
          5: "#6200E3",
          6: "#36007D",
          7: "#349974",
          8: "#2A7D5F",
          9: "#153D2E",
          10: "#6100FF",
          11: "#5700E3",
          12: "#30007D",
        },
      },
    },
    keyframes: {
      "poke-ball-animation": {
        "0%": {
          transform: "scale(0.2)",
        },
        "80%": {
          opacity: 1,
        },
        "100%": {
          transform: "scale(0.8)",
          opacity: 0,
        },
      },
      "pikachu-animation": {
        "0%": {
          transform: "scale(0.8)",
          opacity: 0,
        },
        "8%": {
          transform: "scale(0.8)",
        },
        "60%": {
          opacity: 1,
        },
        "100%": {
          transform: "scale(0.8)",
          opacity: 0,
        },
      },
      "change-background": {
        "0%": {
          opacity: 1,
          transform: "scale(1)",
          "background-size": "cover",
          background: "black",
        },
        "94%": {
          opacity: 1,
          transform: "scale(1)",
        },
        "100%": {
          opacity: 0,
          transform: "scale(1)",
        },
      },
      "pulse-animation": {
        "0%": {
          transform: "scale(1)",
        },
        "50%": {
          transform: "scale(1.08)",
        },
        "100%": {
          transform: "scale(1)",
        },
      },
      "pulse-card-animation": {
        "0%": {
          transform: "scale(1)",
        },
        "50%": {
          transform: "scale(1.04)",
        },
        "100%": {
          transform: "scale(1)",
        },
      },
      "paused-card-animation": {
        "0%": {
          transform: "scale(1.04)",
        },
        "50%": {
          transform: "scale(1.04)",
        },
        "100%": {
          transform: "scale(1.04)",
        },
      },
    },
    animation: {
      "poke-ball": "poke-ball-animation 3s ease forwards",
      pikachu: "pikachu-animation 3.5s ease-out  forwards",
      change: "change-background 6.8s ease-out forwards",
      pulse: "pulse-animation 1.5s infinite ease-in-out",
      pulseCard: "pulse-card-animation 2.5s infinite ease-in-out",
      pausedCard: "paused-card-animation infinite ease-in-out",
    },
  },
  plugins: [require("tailwind-scrollbar")],
};

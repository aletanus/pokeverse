/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
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
    },
    animation: {
      "poke-ball": "poke-ball-animation 3s ease forwards",
      pikachu: "pikachu-animation 3.5s ease-out  forwards",
      change: "change-background 6.8s ease-out forwards",
    },
  },
  plugins: [],
};

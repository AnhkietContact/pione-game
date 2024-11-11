import type { Config } from "tailwindcss";
import defaultConfig from "tailwindcss/defaultConfig";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tailwindcssTextshadow from "tailwindcss-textshadow";
/** @type {import('tailwindcss').Config} */

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "text-color": "#8198A4",
        "primary-footer": "#2A5872",
        "primary-4": "#00D768",
        "primary-5": "#8C8C8C",
        "primary-6": "#8198A4",
        "primary-7": "#F80492",
        "primary-8": "#921CF5",
        customRed: "#FF0000",
        customYellow: "#FFB703",
      },
      backgroundImage: {
        "bgImage-Footer": 'url("/image/svg/bg-footer.svg")',
        "bgImage-Game": 'url("/image/svg/Game.svg")',
        About: 'url("/image/About.png")',
        // "gradient-right": "linear-gradient(to right, #FF5C00 0%, #000000 100%)",
        "gradient-Header": `linear-gradient(0deg, #FFF500, #FFF500),
          radial-gradient(68.42% 175% at 96.59% -90.62%, rgba(225, 27, 84, 0.86) 54.93%, rgba(255, 193, 7, 0.38) 100%),
          radial-gradient(75% 351.94% at -10.23% 35.94%, rgba(192, 0, 0, 0.92) 21.25%, rgba(225, 27, 84, 0.42) 100%),
          radial-gradient(39.2% 181% at 5.68% 100%, rgba(246, 251, 34, 0.51) 0%, rgba(255, 158, 69, 0) 100%),
          radial-gradient(31.25% 236.33% at 96.59% 31.25%, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%)`,
        // Gradient từ trái sang phải
        "gradient-left-to-right":
          "linear-gradient(90deg, rgba(106,0,0,0.02) 0%, rgba(110,0,60,0.19) 43%, rgba(95,6,54,0.35) 59%, rgba(173,0,93,0.83) 100%, rgba(255,0,0,0) 0%)",

        // Gradient từ phải sang trái
        "gradient-right-to-left":
          "linear-gradient(-90deg, rgba(165,0,89,0.02) 40%, rgba(165,0,89,0.7) 70%, rgba(54,0,89,0.36) 100%, rgba(173,0,93,0.7) 83%, rgba(255,0,0,0) 0%)",
      },
      fontFamily: {
        orbitron: ['"Orbitron"', "sans-serif"],
        inter: ["Inter", "sans-serif"],
        ibm: ["IBM Plex Sans", "sans-serif"],
      },
      boxShadow: {
        "Shadow-Purple": "0 4px 20px rgba(255, 86, 246, 0.6)",
        "Shadow-White": "0 4px 6px rgba(255, 255, 255, 0.5)",
        "text-shadow": "0 4px 6px rgba(255, 255, 255, 0.5)",
        red: "0 4px 6px rgba(255, 0, 0, 0.5)",
      },
      container: {
        ...defaultConfig?.theme?.container,
        center: true,
        padding: {
          DEFAULT: "1rem",
          lg: "2rem",
          xl: "2rem",
        },
        screens: {
          sm: "100%",
          md: "100%",
          lg: "1100px",
          xl: "1280px",
          "2xl": "1536px",
        },
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-textshadow")],
};

export default config;

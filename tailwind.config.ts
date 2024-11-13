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
        "white-opacity-10": "rgba(255, 255, 255, 0.1)",
      },
      backgroundImage: {
        "bgImage-Footer": 'url("/image/svg/bg-footer.svg")',
        "bgImage-Game": 'url("/image/svg/Game.svg")',
        "bgImage-Sea": 'url("/image/svg/Bg-Sea.svg")',
        MenuStart: 'url("/image/svg/MenuStart.svg")',
        About: 'url("/image/About.png")',
        About2: 'url("/image/About-4.png")',
        "gradient-right": "linear-gradient(90deg, #FF0000 0%, #FF5C00 100%)",
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
        "gradient-red-transparent":
          "linear-gradient(to right, #FF0000, rgba(0, 0, 0, 0))",
        "gradient-orange-transparent":
          "linear-gradient(to left, #FF5C00, rgba(0, 0, 0, 0))",
        "gradient-border": `linear-gradient(-45deg, 
          rgba(165, 0, 89, 0.4) 2%, 
          rgba(165, 0, 89, 0.7) 19%, 
          rgba(165, 0, 89, 1) 36%, 
          rgba(173, 0, 93, 0.7) 59%, 
          rgba(255, 0, 0, 0) 83%)`,
        "gradient-gray":
          "linear-gradient(90deg, rgba(97, 97, 97, 1) 0%, rgba(255, 255, 255, 0) 100%)",
        "gradient-button":
          "linear-gradient(47deg, rgba(255, 166, 250, 1) 47%, rgba(212, 60, 60, 1) 97%)",
        "gradient-bg":
          "linear-gradient(90deg, rgba(255, 86, 86, 1) 18%, rgba(238, 54, 54, 1) 43%, rgba(226, 59, 199, 1) 85%, rgba(123, 0, 89, 1) 100%)",
        "Red-Opacity":
          "linear-gradient(90deg, rgba(255, 0, 0, 1) 0%, rgba(75, 5, 43, 0) 100%)",
        "Red-Opacity-Right":
          "linear-gradient(270deg, rgba(255, 0, 0, 1) 0%, rgba(75, 5, 43, 0) 100%)",
        "Gradient-white": "rgba(255, 255, 255, 0.1)",
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
        Purple: "#36011D",
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
      animation: {
        floating: "floating 3s ease-in-out infinite",
        "move-left": "move-left 3s ease-in-out infinite",
        "move-right": "move-right 3s ease-in-out infinite",
        "move-top": "move-top 3s ease-in-out infinite",
        "move-bottom": "move-bottom 3s ease-in-out infinite",
        fade: "fade 1s ease-in-out",
        "fade-down": "fade-down 1s ease-in-out",
        "fade-up": "fade-up 1s ease-in-out",
        "fade-left": "fade-left 1s ease-in-out",
        "fade-right": "fade-right 1s ease-in-out",
        "flip-up": "flip-up 1s ease-in-out",
        "flip-down": "flip-down 1s ease-in-out",
      },
      keyframes: {
        floating: {
          "0%, 100%": { transform: "translateY(-10px)" },
          "50%": { transform: "translateY(10px)" },
        },
        "move-left": {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(-50px)" },
        },
        "move-right": {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(50px)" },
        },
        "move-top": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-50px)" },
        },
        "move-bottom": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(50px)" },
        },
        fade: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-down": {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-left": {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "fade-right": {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "flip-up": {
          "0%": { transform: "rotateX(90deg)", opacity: "0" },
          "100%": { transform: "rotateX(0)", opacity: "1" },
        },
        "flip-down": {
          "0%": { transform: "rotateX(-90deg)", opacity: "0" },
          "100%": { transform: "rotateX(0)", opacity: "1" },
        },
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-textshadow")],
};

export default config;

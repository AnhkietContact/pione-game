import type { Config } from "tailwindcss";
import defaultConfig from "tailwindcss/defaultConfig";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// import tailwindcssTextshadow from "tailwindcss-textshadow";
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
        "primary-4": "#FF5C00",
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
          rgba(165, 0, 89, 0.4), 
          rgba(165, 0, 89, 0.7), 
          rgba(165, 0, 89, 1), 
          rgba(173, 0, 93, 0.7), 
          rgba(255, 0, 0, 0))`,

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
        Purple:
          "-4px 4px 20px rgba(54, 1, 29, 0.5), 4px 4px 20px rgba(54, 1, 29, 0.5), 0 8px 20px rgba(54, 1, 29, 0.5)",
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
        wiggle: "wiggle 1s ease-in-out",
        ping: "ping 0.1s cubic-bezier(0, 0, 0.2, 1) infinite",
        "ping-delay-1": "ping 2s infinite 0s",
        "ping-delay-2": "ping 2s infinite 0.2s",
        "ping-delay-3": "ping 2s infinite 0.4s",
        "ping-delay-4": "ping 2s infinite 0.6s",
        "ping-delay-5": "ping 2s infinite 0.8s",
        "ping-delay-6": "ping 2s infinite 1s",
        "ping-delay-7": "ping 2s infinite 1.2s",
        "ping-delay-8": "ping 2s infinite 1.4s",
        "fade-in-haftRight2":
          "fade-in-haftRight2 5s ease-in-out infinite alternate",
        "fade-in-haftRightReimagined":
          "fade-in-haftRightReimagined 30s ease-in-out infinite alternate",
        "fade-in-haftBottomtReimagined":
          "fade-in-haftBottomtReimagined 30s ease-in-out infinite alternate",
        "fade-in-haftLeftReimagined":
          "fade-in-haftLeftReimagined 30s ease-in-out infinite alternate",
        "fade-in-haftLeftBottomReimagined":
          "fade-in-haftLeftBottomReimagined 30s ease-in-out infinite alternate",
        "fade-in-RightLeftReimagined":
          "fade-in-RightLeftReimagined 30s linear infinite alternate",
        "spin-clockwise": "spin-clockwise 50s linear infinite",
        "spin-counterclockwise": "spin-counterclockwise 50s linear infinite",
        "ping-delay": "ping 2s cubic-bezier(0, 0, 0.2, 1) infinite 20s",
      },
      keyframes: {
        wiggle: {
          "0%": { opacity: "0" },
          "25%": { opacity: "0.3" },
          "50%": { opacity: "0.6" },
          "75%": { opacity: "0.8" },
          "100%": { opacity: "1" },
        },

        ping: {
          "0%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.5)", opacity: "0.5" },
          "100%": { transform: "scale(1)", opacity: "0" },
        },
        "fade-in-haftLeftReimagined": {
          "0%": {
            top: "9%",
            left: "12%",
          },
          "33%": {
            top: "22%",
            left: "5%",
          },
          "66%": {
            top: "11%",
            left: "9%",
          },
          "100%": {
            left: "25%",
            top: "8%",
          },
        },
        "fade-in-haftLeftBottomReimagined": {
          "0%": {
            bottom: "9%",
            left: "12%",
          },
          "33%": {
            bottom: "22%",
            left: "5%",
          },
          "66%": {
            bottom: "11%",
            left: "9%",
          },
          "100%": {
            left: "25%",
            bottom: "8%",
          },
        },
        "fade-in-haftRightReimagined": {
          "0%": {
            top: "9%",
            right: "12%",
          },
          "33%": {
            right: "22%",
            top: "5%",
          },
          "66%": {
            top: "11%",
            right: "9%",
          },
          "100%": {
            right: "25%",
            top: "8%",
          },
        },
        "fade-in-haftBottomtReimagined": {
          "0%": {
            bottom: "3%",
            right: "33%",
          },
          "33%": {
            bottom: "10%",
            right: "5%",
          },
          "66%": {
            bottom: "4%",
            right: "35%",
          },
          "100%": {
            bottom: "12%",
            right: "7%",
          },
        },
        floating: {
          "0%, 100%": { transform: "translateY(-10px)" },
          "50%": { transform: "translateY(10px)" },
        },
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-textshadow")],
};

export default config;

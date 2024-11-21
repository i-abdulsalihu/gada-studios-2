import type { Config } from "tailwindcss";

import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        grotesk: ["var(--font-grotesk)", ...fontFamily.sans],
        neskt: ["var(--font-nekst)", ...fontFamily.sans],
      },
      colors: {
        gada: {
          50: "#F8F5EE",
          100: "#EFE7D2",
          200: "#E0CFA8",
          300: "#CEB076",
          400: "#BF9550",
          500: "#B88745",
          600: "#976637",
          700: "#794D2F",
          800: "#66412D",
          900: "#59372A",
          950: "#331D15",
        },
        black: {
          50: "#F6F6F6",
          100: "#E7E7E7",
          200: "#D1D1D1",
          300: "#B0B0B0",
          400: "#888888",
          500: "#6D6D6D",
          600: "#5D5D5D",
          700: "#4F4F4F",
          800: "#454545",
          900: "#3D3D3D",
          950: "#000000",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        "move-left": "move-left 1s linear infinite",
        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
      },
      keyframes: {
        "move-left": {
          "0%": {
            transform: "translateX(0%)",
          },
          "100%": {
            transform: "translateX(-50%)",
          },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
      },
      transitionTimingFunction: {
        "custom-cubic": "cubic-bezier(0.76, 0, 0.24, 1)",
      },
      transitionDuration: {
        "500": "500ms",
      },
      transitionProperty: {
        top: "top",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;

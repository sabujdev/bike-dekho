import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans , sans-serif"],
      },
      colors: {
        primary: "#0087EB",
        secondary: "#183656",
        alartColor: "#E76F51",
        black: "#000000",
        white: "#FFFFFF",
        gray900: "#DEDEDE",
        gray300: "#D5E5FB",
        mutedColor: "#A6A6A6",
        blue400: "#55ACEE",
        gray400: "#B1BCC7",
        pink500: "#E74D89",
        pink700: "#B2215A",
        indig50: "#EEF4FF",
      },
    },
  },
  plugins: [],
};
export default config;

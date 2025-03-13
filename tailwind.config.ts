import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
  ],
  theme: {
    colors: {
      primary: "#9BB537",
      secondary: "#FFAD63",
      white: "#FFFFFF",
      black: "#000000",
      gray: "#4B5563",
    },
    fontFamily: {
      // sans: ["Inter", "serif"],
    },
    extend: {
      fontSize: {
        base: "16px",
      },
      lineHeight: {
        base: "1.5",
      },
      fontWeight: {
        regular: "400",
      },
      animation: {
        slide: "slide 1s ease-in-out",
        stretch: "stretch 1s ease-out",
      },
    },
  },
  plugins: [],
};

export default config;

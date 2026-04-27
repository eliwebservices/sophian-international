import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy:  "#022741",
        navy2: "#031e31",
        gold:  "#908E66",
        gold2: "#b8b690",
        cream: "#F7F4EF",
        warm:  "#EDE9E1",
        muted: "#6b6b6b",
      },
      fontFamily: {
        display: ["Cormorant Garamond", "Georgia", "serif"],
        body:    ["DM Sans", "sans-serif"],
      },
      fontSize: {
        "2xs": "9px",
        "3xs": "7px",
      },
      letterSpacing: {
        "widest2": "0.35em",
        "widest3": "0.4em",
      },
    },
  },
  plugins: [],
};

export default config;

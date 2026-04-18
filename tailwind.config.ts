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
        sans: ["Syne", "sans-serif"],
        mono: ["Space Mono", "monospace"],
      },
      colors: {
        accent1: "#7c3aed",
        accent2: "#06b6d4",
        accent3: "#10b981",
      },
    },
  },
  plugins: [],
};

export default config;

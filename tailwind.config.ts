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
        "m-white": "#FEFEFF",
        "m-grey": "#A0A0A0",
        "m-light": "#e3edff",
        "m-dark": "#17234b",
      },
      boxShadow: {
        "shadow-1": "0px 0px 24px 4px rgba(130, 140, 230, 0.7)",
        "shadow-2": "4px 4px 24px 4px rgba(130, 140, 230, 0.7)",
      },
    },
  },
  plugins: [],
};
export default config;

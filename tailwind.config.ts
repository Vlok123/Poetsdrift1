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
        primary: {
          DEFAULT: "#1a4d3a", // Donkergroen
          dark: "#0f2e1f",
          light: "#2d6b4f",
        },
        secondary: {
          DEFAULT: "#FAFAFA",
          dark: "#F5F5F5",
          light: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#fbbf24", // Geel
          dark: "#f59e0b",
          light: "#fcd34d",
        },
        gray: {
          50: "#FAFAFA",
          100: "#F5F5F5",
          200: "#EEEEEE",
          300: "#E0E0E0",
          400: "#BDBDBD",
          500: "#9E9E9E",
          600: "#757575",
          700: "#616161",
          800: "#424242",
          900: "#212121",
        },
        text: {
          primary: "#000000",
          secondary: "#2C2C2C",
          muted: "#616161",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;

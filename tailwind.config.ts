import { Oswald } from "next/font/google";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        kaushan : ["var(--font-kaushan)", "sans-serif"],
        Oswald: ["var(--font-Oswald)","sans-serif"]
      }
    },
  },
  plugins: [],
} satisfies Config;

import type { Config } from "tailwindcss";

const config: Config = {
  // hover: utilities only apply on hover-capable pointers, so taps on phones
  // don't leave hover states stuck on. globals.css follows the same rule.
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ['var(--font-source-sans-3)', 'sans-serif'],
      serif: ['var(--font-roboto-slab)', 'serif'],
    },
    extend: {
      gridTemplateColumns: {
        core: "1fr min(1024px, 100%) 1fr",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;

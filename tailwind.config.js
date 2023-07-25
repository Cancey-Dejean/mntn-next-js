/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0B1D26",
        accent: "#fbd784",
        gray: "rgba(255, 255, 255, 0.5)",
      },
      fontFamily: {
        gilroy: ["Gilroy", "sans-serif"],
        chronicle: ["Chronicle Display", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(180deg, rgba(11.48, 29.32, 38.25, 0) 0%, #0B1D26 72%)",
      },
      screens: {
        sm: { min: "640px", max: "767px" },
        // => @media (min-width: 640px and max-width: 767px) { ... }

        md: { min: "768px", max: "1023px" },
        // => @media (min-width: 768px and max-width: 1023px) { ... }

        lg: { min: "1024px", max: "1279px" },
        // => @media (min-width: 1024px and max-width: 1279px) { ... }

        xl: { min: "1280px", max: "1535px" },
        // => @media (min-width: 1280px and max-width: 1535px) { ... }

        "2xl": { min: "1536px", max: "1920px" },
        // => @media (min-width: 1536px) and max-width: 1920px) { ... }

        "3xl": { min: "1921px" },
        // => @media (min-width: 1921px) { ... }
      },
    },
  },
  plugins: [],
}

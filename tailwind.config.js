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
        wei: "#fff",
        accent: "#fbd784",
        gray: "rgba(255, 255, 255, 0.5)",
      },
    },
  },
  plugins: [],
}

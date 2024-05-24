/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  darkMode: ["selector", '[data-dark-theme="true"]'],
  theme: {
    extend: {
      colors: {
        "LM-neutral": "#000000",
        "LM-primary": "#E9FEFF",
        "LM-accent-light": "#1D7285",
        "LM-accent-dark": "#1A3B42",
        "DM-neutral": "#E9E9E9",
        "DM-primary": "#1A2F31",
        "DM-accent-light": "#ADF1FF",
        "DM-accent-dark": "#54CFEA",
      },
      fontFamily: {
        jost: ["Jost", "ui-sans-serif", "sans-serif"],
        "nanum-pen": ["Nanum Pen", "cursive"],
      },
      spacing: {
        19: "4.75rem",
      },
    },
    screens: {
      "2xl": { max: "1536px" },
      xl: { max: "1280px" },
      lg: { max: "1024px" },
      md: { max: "768px" },
      sm: { max: "640px" },
      xs: { max: "425px" },
    },
  },
  plugins: [],
};

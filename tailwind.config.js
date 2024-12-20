/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "pali-teal": "rgb(77, 220, 212)",
        "pali-teal-dark": "rgba(0, 143, 141, 255)",
        paliPink: "#FB6E70",
        paliPinkDark: "#DE4343",
        paliGreen: "#368D89",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      textShadow: {
        soft: "2px 2px 4px rgba(0, 0, 0, 0.1)", // Subtle shadow
        medium: "3px 3px 5px rgba(0, 0, 0, 0.3)", // Medium shadow
        strong: "4px 4px 6px rgba(0, 0, 0, 0.4)", // Strong shadow
      },
      backgroundImage: {
        "gradient-pali":
          "linear-gradient(to right, rgb(77, 220, 212), rgba(2, 3, 6, 10) )",
        "gradient-pinki": "linear-gradient(to right, #FBCFE8, #DE403F)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        "poiret-one": ['"Poiret One"', "sans-serif"],
      },
      screens: {
        xs: "270px",
      },
    },
  },
  plugins: [require("tailwindcss-textshadow")],
};

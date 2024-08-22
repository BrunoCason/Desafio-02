/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      pacifico: ["Pacifico", "sans-serif"],
      raleway: ["Raleway", "serif"],
      lato: ["Lato", "serif"],
      inter: ["Inter", "serif"],
      garamond: ["Garamond", "serif"],
      oswald: ["Oswald", "serif"],
    },
    extend: {
      spacing: {
        "52px": "3.25rem",
        "72px": "4.5rem",
        "88px": "5.5rem",
        "496px": "31rem",
        "616px": "38.5rem",
        "690px": "43.125rem",
        "700px": "43.75rem",
        "572px": "35.75rem",
        "752px": "47rem",
        "1280px": "80rem",
      },
      fontSize: {
        "6.5xl": [
          "4rem",
          {
            lineHeight: "1.2",
          },
        ],
      },
      screens: {
        "3.5xl": "1670px",
        "3xl": "1732px",
      },
      colors: {
        "athena-grey": "#F8F9FB",
        wisper: "#F0F1EE",
        "moss-green": "#354733",
        "lunar-green": "#354733",
        avacado: "#8A9B6E",
        accent: "#DDDEA0",
        IBBNB: "#1E1E24",
        teak: "#B99274",
        secondary: "#808276",
        "white-plant": "#FCFCFC",
        "gray-plant": "#AFB2AA",
        "light-green-100": "#83E281",
        "light-green-200": "#158212",
      },
      backgroundImage: {
        "background-footer": "url('/src/assets/footer-background.png')",
      },
    },
  },
  plugins: [],
};


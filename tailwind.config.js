module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nero: "#191919",
        turquoise: "#b3d6ff",
        "suva-grey": "#919191",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "0",
        sm: "1rem",
      },
    },
  },
  plugins: [],
};

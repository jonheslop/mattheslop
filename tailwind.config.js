module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        "home-layout": "1fr 2fr",
        "post-layout": "2fr 1fr",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

module.exports = {
  purge: ['./index.html', './website/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: "class", //  false  or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  typography: (theme) => ({
    dark: {
      css: {
        color: theme("colors.gray.100"),
        a: {
          color: theme("colors.blue.100"),
          "&:hover": {
            color: theme("colors.blue.100"),
          },
        },
      },
    },
  }),
  plugins: [
    require("@tailwindcss/typography")({
      modifiers: [],
    }),
  ],
}

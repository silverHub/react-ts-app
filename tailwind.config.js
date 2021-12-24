module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("tailwindcss-textshadow"),
    require("@tailwindcss/typography"),
  ],
};

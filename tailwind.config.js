/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  // content: ["./src/**/*.{*.html,*.js,*.jsx}"],
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

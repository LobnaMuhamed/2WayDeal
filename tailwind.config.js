/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#Fd4b03",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};

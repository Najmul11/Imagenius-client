/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },

      fontWeight: {
        semi: "500",
      },
      backgroundImage: {
        auth: "url('/src/assets/authBg.png')",
      },
    },
  },
  plugins: [require("daisyui")],
};

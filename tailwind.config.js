/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        gradient: "#e7eef7",
        gradient2: "#e7eef9",
        banner: "#693f19",
      },
      height: {
        banner: "500px",
      },
      boxShadow: {
        line: "0px 2px  rgba(255, 255, 255, .6)",
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

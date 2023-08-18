/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "540px",
        "2xs": "420px",
      },
      colors: {
        brand: {
          DEFAULT: "#D64D5F",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

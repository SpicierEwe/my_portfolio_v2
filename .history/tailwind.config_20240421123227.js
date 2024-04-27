/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        "brand-color": "#223c63",
        "primary-color": "#ffffff",
        "secondary-color": "#00A699",
        "accent-color": "#779ace",
      },

      fontFamily: {
        garmond: ["Garmond"],
        custom_sans: ["Proxima Nova"],
      },

      height: {
        dvh: "100dvh",
      },
    },
  },

  plugins: [],
};

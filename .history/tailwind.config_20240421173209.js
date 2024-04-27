const { reverse } = require("dns");
const defaultTheme = require("tailwindcss/defaultTheme");

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

      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },

        levitate: {
          "0%": { transform: "translateY(50px)" },
          "50%": { transform: "translateY(-30px)  scale(1.1)" },
          "100%": { transform: "translateY(50px)" },
        },
        levitate: {
          "0%": { transform: "translateY(50px)" },
          "50%": { transform: "translateY(-30px)  scale(1.1)" },
          "100%": { transform: "translateY(50px)" },
        },
      },

      animation: {
        "spin-slow": "spin 3s linear infinite",
        wiggle: "wiggle 1s ease-in-out infinite",
        levitate: "levitate 5s ease-in-out infinite",
        levitate_reverse: "levitate 5s ease-in-out infinite reverse",
      },

      fontFamily: {
        garmond: ["Garmond", ...defaultTheme.fontFamily.serif],
        custom_sans: ["Proxima Nova", ...defaultTheme.fontFamily.sans],
      },

      height: {
        dvh: "100dvh",
      },
    },
  },

  plugins: [],
};

/** @type {import('tailwindcss').Config} */
const { hairlineWidth } = require("nativewind/theme");
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          400: "var(--color-primary-400)",
          500: "var(--color-primary-500)",
          600: "var(--color-primary-600)",
        },
        base: {
          50: "var(--color-base-50)",
          100: "var(--color-base-100)",
          200: "var(--color-base-200)",
          300: "var(--color-base-300)",
          400: "var(--color-base-400)",
          500: "var(--color-base-500)",
          600: "var(--color-base-600)",
          700: "var(--color-base-700)",
          800: "var(--color-base-800)",
          900: "var(--color-base-900)",
          950: "var(--color-base-950)",
        },
      },
      borderWidth: {
        hairline: hairlineWidth(),
      },
    },
  },
  plugins: [
    ({ addBase }) =>
      addBase({
        ":root": {
          "--color-base-50": "#f6f6f6",
          "--color-base-100": "#e7e7e7",
          "--color-base-200": "#d1d1d1",
          "--color-base-300": "#b0b0b0",
          "--color-base-400": "#888888",
          "--color-base-500": "#6d6d6d",
          "--color-base-600": "#5d5d5d",
          "--color-base-700": "#4f4f4f",
          "--color-base-800": "#454545",
          "--color-base-900": "#333333",
          "--color-base-950": "#262626",
          "--color-primary-400": "#50b4ff",
          "--color-primary-500": "#2892ff",
          "--color-primary-600": "#1676FF",
        },
        ".dark:root": {
          "--color-base-50": "#262626",
          "--color-base-100": "#333333",
          "--color-base-200": "#454545",
          "--color-base-300": "#4f4f4f",
          "--color-base-400": "#5d5d5d",
          "--color-base-500": "#6d6d6d",
          "--color-base-600": "#888888",
          "--color-base-700": "#b0b0b0",
          "--color-base-800": "#d1d1d1",
          "--color-base-900": "#e7e7e7",
          "--color-base-950": "#f6f6f6",
          "--color-primary-400": "#1676FF",
          "--color-primary-500": "#2892ff",
          "--color-primary-600": "#50b4ff",
        },
      }),
  ],
};

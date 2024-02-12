const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Raleway Variable", ...defaultTheme.fontFamily.sans],
        serif: ["Allura", ...defaultTheme.fontFamily.serif],
      },

      spacing: {
        160: "40rem",
        240: "60rem",
      },
    },
  },

  daisyui: {
    themes: [
      {
        // https://daisyui.com/theme-generator/
        cupcake: {
          ...require("daisyui/src/theming/themes")["cupcake"],
          // primary: "#8C2F57",
          // secondary: "#FAD253",
          // accent: "#6484C0",
          primary: "#7DB54B",
          secondary: "#8C2F57",
          accent: "#6484C0",
        },
      },
    ],
    darkTheme: "cupcake",
    logs: false,
  },

  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};

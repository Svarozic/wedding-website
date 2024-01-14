/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      spacing: {
        160: "40rem",
        240: "60rem",
      },
    },
  },

  daisyui: {
    themes: ["cupcake"],
    darkTheme: "cupcake",
    logs: false,
  },

  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};

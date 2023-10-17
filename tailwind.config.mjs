/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
  },

  daisyui: {
    themes: [
      {
        cupcake: {
          ...require('daisyui/src/theming/themes')['[data-theme=cupcake]'],
          primary: 'blue',
          'primary-focus': 'mediumblue',
          'base-100': '#fffaf0',
          'base-200': '#faf7f5', // original base-100
          'base-300': '#efeae6', // original base-200
        },
      },
    ],
    darkTheme: 'cupcake',
    logs: false,
  },

  plugins: [require('@tailwindcss/typography'), require('daisyui')],
};

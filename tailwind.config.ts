import flowbitePlugin from "flowbite/plugin";

import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
  ],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        primary: {
          on: '#1E429F',
          onHover: '#233876',
          onText: '#FFFFFF',
          off: '#FFFFFF',
          offHover: '#F3F4F6',
          offText: '#000000',
        },
        secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
        surface: 'var(--color-surface)',
        fine: 'rgb(var(--color-fine) / <alpha-value>)',
        info: 'rgb(var(--color-info) / <alpha-value>)',
        danger: 'rgb(var(--color-danger) / <alpha-value>)',
        cancel: 'rgb(var(--color-cancel) / <alpha-value>)',
        disabled: 'rgb(var(--color-disabled) / <alpha-value>)',
        text: {
          base: 'rgb(var(--color-text-base) / <alpha-value>)',
          accent: 'rgb(var(--color-text-accent) / <alpha-value>)',
          inverted: 'rgb(var(--color-text-inverted) / <alpha-value>)',
          link: 'rgb(var(--color-text-link) / <alpha-value>)',
        },
      },
    },
  },

  plugins: [flowbitePlugin],
} as Config;

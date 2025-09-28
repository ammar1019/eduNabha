/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef8ff',
          100: '#d9efff',
          200: '#bce3ff',
          300: '#8ed1ff',
          400: '#59b6ff',
          500: '#3494ff',
          600: '#1a71f5',
          700: '#1659e1',
          800: '#1948b6',
          900: '#1b408d',
          950: '#152754',
        },
      },
      typography: (theme) => ({
        dark: {
          css: {
            color: theme('colors.gray.300'),
            '[class~="lead"]': { color: theme('colors.gray.400') },
            a: { color: theme('colors.primary.500') },
            strong: { color: theme('colors.white') },
            'ul > li::before': { backgroundColor: theme('colors.gray.600') },
            hr: { borderColor: theme('colors.gray.200') },
            blockquote: {
              color: theme('colors.gray.200'),
              borderLeftColor: theme('colors.gray.600'),
            },
            h1: { color: theme('colors.white') },
            h2: { color: theme('colors.white') },
            h3: { color: theme('colors.white') },
            h4: { color: theme('colors.white') },
            code: { color: theme('colors.white') },
            'a code': { color: theme('colors.white') },
            pre: {
              color: theme('colors.gray.200'),
              backgroundColor: theme('colors.gray.800'),
            },
            thead: {
              color: theme('colors.white'),
              borderBottomColor: theme('colors.gray.400'),
            },
            'tbody tr': { borderBottomColor: theme('colors.gray.600') },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
  ]
}
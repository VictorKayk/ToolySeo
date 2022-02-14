module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--main-color-primary)',
        secondary: 'var(--main-color-secondary)',
        'alt-primary': 'var(--alt-color-primary)',
        'alt-secondary': 'var(--alt-color-secondary)',
        'color-pink': 'var(--color-pink)',
        'color-grey': 'var(--color-grey)',
        'color-grey-70': 'var(--color-grey-70)',
        'color-white-80': 'var(--color-white-80)',
        'color-white-50': 'var(--color-white-50)',
      },
      maxWidth: {
        maxWidth: 'var(--max-width)',
      },
    },
  },
  plugins: [],
};

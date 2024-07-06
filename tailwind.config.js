/** @type {import('tailwindcss').Config} */

const tailwindColor = {
  transparent: 'transparent',
  current: 'currentColor',
  'white': '#ffffff',
  black : '#000000',
  'bg-btn' : '#0B0B0B',
  'icon-deactive' : '#6C6C6C'
}

const config = {
  content: [
    "./src/app/**/*.{js,jsx}",
  ],
  theme: {
    colors  : tailwindColor,
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
}
export default config;

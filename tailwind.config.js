/** @type {import('tailwindcss').Config} */

const tailwindColor = {
  transparent: 'transparent',
  current: 'currentColor',
  'white': '#ffffff',
  'white-60': '#ffffff60',
  'white-40': '#ffffff40',
  'white-30': '#ffffff30',
  'white-20': '#ffffff20',
  'white-10': '#ffffff10',
  'white-05': '#ffffff05',
  'white-10': '#ffffff05',
  'white-02': '#ffffff02',
  black : '#000000',
  'black-20' : '#00000020',
  'black-60' : '#00000060',
  'black-02' : '#00000002',
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

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      aspectRatio: {
        '1': '1',
      },
      borderRadius: {
        '1/2': '50%',

      },
      zIndex: {
        '60': '60',
      }
    },
  },
  plugins: [],
}


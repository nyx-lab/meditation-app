/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./App.{js,jsx,ts,tsx}",
      "./app/**/*.{js,jsx,ts,tsx}", // Include all JS, JSX, TS, and TSX files in the app folder
      "./components/**/*.{js,jsx,ts,tsx}", // Include all JS, JSX, TS, and TSX files in the components folder]
      "./app/(tabs)/meditate.tsx",
  ],
  theme: {
      extend: {
          fontFamily: {
              rmono: ["Roboto-Mono", "sans-serif"],
          },
          colors: {
            primary: {
                50: '#EAF4F0',
                100: '#D4E8E1',
                200: '#AAD1C3',
                300: '#7FB9A5',
                400: '#5BA58B',
                500: '#378F71',
                600: '#277359',
                700: '#1D5942',
                800: '#133F2B',
                900: '#0A2614',
                950: '#05130A'
              },
              highlight: {
                600: '#A4E5C0' // Calming highlight color
              },
              charcoal: {
                50: '#F5F7FA', // Very light blue-gray
                100: '#EBEFF3', // Light blue-gray
                200: '#D6DEE7', // Light blue-gray
                300: '#BDC6D1', // Medium light blue-gray
                400: '#A0AEBE', // Medium blue-gray
                500: '#798FA1', // Dark blue-gray
                600: '#5F7183', // Darker blue-gray
                700: '#495A6B', // Even darker blue-gray
                800: '#354354', // Very dark blue-gray
                900: '#222B3D' // Almost black blue-gray
              },
          }
      },
  },
  plugins: [],
};
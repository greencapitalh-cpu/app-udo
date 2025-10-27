/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'media', // automatic dark mode based on OS
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#1E3A8A', // blue-800
          light: '#3B82F6',
          dark: '#1E40AF'
        }
      },
      boxShadow: {
        card: '0 10px 25px -10px rgba(0,0,0,0.15)'
      },
      borderRadius: {
        xl: '1rem'
      }
    }
  },
  plugins: []
};

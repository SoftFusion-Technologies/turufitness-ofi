/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1E90FF',
        secondary: '#D16BA5',
        dark: '#1A1A1A',
        white: '#FFFFFF',
        purple: '#6C63FF',
        lightGray: '#F5F5F5'
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite' // 🌀 giro suave y lento
      }
    }
  },
  plugins: []
};

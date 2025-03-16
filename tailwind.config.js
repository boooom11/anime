/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'neo-purple': {
          100: '#e4d1ff',
          200: '#c9a3ff',
          300: '#ad75ff',
          400: '#9247ff',
          500: '#7719ff',
          600: '#5f14cc',
          700: '#470f99',
          800: '#300a66',
          900: '#180533',
        },
        'neo-black': {
          100: '#d1d1d1',
          200: '#a3a3a3',
          300: '#757575',
          400: '#474747',
          500: '#191919',
          600: '#141414',
          700: '#0f0f0f',
          800: '#0a0a0a',
          900: '#050505',
        }
      },
      fontFamily: {
        'sans': ['Poppins', 'ui-sans-serif', 'system-ui'],
        'display': ['Orbitron', 'ui-sans-serif', 'system-ui'],
      },
      boxShadow: {
        'neon-purple': '0 0 5px #7719ff, 0 0 20px rgba(119, 25, 255, 0.3)',
        'neon-purple-lg': '0 0 10px #7719ff, 0 0 30px rgba(119, 25, 255, 0.5)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};
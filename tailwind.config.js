/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'sans': ['Poppins', 'sans-serif'], // Define Poppins como fonte padrão
      },
      colors: {
        'estrada': {
          // Nova cor verde da diretoria: RGB(42, 93, 59)
          'green': '#2A5D3B',
          'green-light': '#3A7D4B', // Versão mais clara para hover
          'green-dark': '#1A4D2B',  // Versão mais escura
          'green-50': '#F0F7F3',   // Versão muito clara para backgrounds
          'green-100': '#D1E7DB',  // Versão clara para backgrounds
        },
      },
    },
  },
  plugins: [],
};

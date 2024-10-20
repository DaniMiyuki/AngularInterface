/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        // As cores já estão configuradas no Tailwind, mas você pode adicionar mais aqui, se necessário
      },
      
      textShadow: {
        'default': '2px 2px 4px rgba(0, 0, 0, 0.5)',
        'red-500': '2px 2px 4px rgba(239, 68, 68, 0.5)',  // Tailwind red-500
        'blue-200': '2px 2px 4px rgba(191, 219, 254, 0.5)', // Tailwind blue-200
        'green-400': '2px 2px 4px rgba(34, 197, 94, 0.5)', // Tailwind green-400
        'gray-700': '2px 2px 4px rgba(55, 65, 81, 0.5)',   // Tailwind gray-700
        'lg': '4px 4px 6px rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow': {
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow-red-500': {
          textShadow: '2px 2px 4px rgba(239, 68, 68, 0.5)',  // Sombra vermelha
        },
        '.text-shadow-blue-200': {
          textShadow: '2px 2px 4px rgba(191, 219, 254, 0.5)', // Sombra azul clara
        },
        '.text-shadow-green-400': {
          textShadow: '2px 2px 4px rgba(34, 197, 94, 0.5)', // Sombra verde
        },
        '.text-shadow-gray-700': {
          textShadow: '2px 2px 4px rgba(55, 65, 81, 0.5)',   // Sombra cinza escura
        },
        '.text-shadow-lg': {
          textShadow: '4px 4px 6px rgba(0, 0, 0, 0.5)',
        },
      }

      addUtilities(newUtilities, ['responsive', 'hover'])
    }

  ],
}


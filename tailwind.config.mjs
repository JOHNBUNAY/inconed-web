/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'inconed-gold': '#F2A900',
        'inconed-black': '#000000',
        'inconed-dark': '#111111',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif'],
      },
      // 👇 AQUÍ AGREGAMOS LA MAGIA DE LAS ANIMACIONES
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      animation: {
        'fade-up': 'fadeUp 1s ease-out forwards', // Animación de 1 segundo
        'fade-up-delay': 'fadeUp 1s ease-out 0.3s forwards', // La misma, pero espera 0.3s
      }
    },
  },
  plugins: [],
}
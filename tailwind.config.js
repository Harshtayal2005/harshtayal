/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.clip-footer': {
          clipPath: 'polygon(75% 0, 100% 38%, 100% 99%, 0 100%, 0 17%)',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};

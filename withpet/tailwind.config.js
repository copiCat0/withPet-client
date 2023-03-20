/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#FAEFE9',
          200: '#F6615A',
          300: '#FF0101',
        },
        Gray: {
          100: '#FAFAFA',
          200: '#D9D9D9',
          300: '#A8A8A8',
          400: '#6A696B',
        },
        contentText: '#212121',
      },
      fontFamily: {
        sans: ['Pretendard', 'sans-serif'],
      },
      maxWidth: {
        scr: '31.25rem',
      },
      boxShadow: {
        100: '5px 5px rgb(0,0,0)',
        200: '3px 3px 4px 0 rgba(0,0,0,0.5)',
      },
    },
  },
  plugins: [],
}

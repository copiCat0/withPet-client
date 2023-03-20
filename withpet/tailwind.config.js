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
      width: {
        8.9: '2.1875rem',
        85: '21.4375rem',
      },
      maxWidth: {
        scr: '31.25rem',
      },
      height: {
        8.9: '2.1875rem',
      },
      lineHeight: {
        12: '3.5rem',
      },
      boxShadow: {
        '2md': '5px 5px 0px #000000',
      },
    },
  },
  plugins: [],
}

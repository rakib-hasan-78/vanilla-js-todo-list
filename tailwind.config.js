
export default {
  content: [
    './*.{html,js}', 
    './src/**/*.{html,js}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-to-right': 'linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)',
      },
      fontFamily:{
        sans:['Bungee', 'sans-serif'],
        serif:['Raleway', 'sans-serif']
      }
    },
  },
  plugins: [],
}

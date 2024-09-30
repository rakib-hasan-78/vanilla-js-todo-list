import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
// import cssnano from 'cssnano';

export default {
  plugins: [
    tailwindcss,
    autoprefixer(), // Corrected to call the function
    // cssnano({ preset: 'default' }) // Uncomment if you decide to use cssnano
  ]
};

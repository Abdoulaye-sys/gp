module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',  // Scanne tous les fichiers dans le dossier `src`
    './pages/**/*.{js,ts,jsx,tsx}', // Si tu utilises un dossier `pages`
    './src/app/**/*.{js,ts,jsx,tsx}', // Ajoute cette ligne pour le dossier `src/app`
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

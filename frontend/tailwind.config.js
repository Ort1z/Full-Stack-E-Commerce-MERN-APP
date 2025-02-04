/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  // Include all React files
  ],
  theme: {
    extend: {
      colors: {  
        'brand-blue': '#3B82F6',  
        'brand-purple': '#8B5CF6'  
      }  
    },
  },
  plugins: [],
}
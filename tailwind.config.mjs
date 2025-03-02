/** @type {import('tailwindcss').Config} */
export default {
 content: [
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
 ],
 theme: {
  extend: {
   colors: {
    lighHover: '#fcf4ff',
    darkHover: '#2a004a',
    darkTheme: '#11001F',
   },
   fontFamily: {
    Outfit: ["Outfit", "sans-serif"],
    Ovo: ["Ovo", "serif"]
   },
   boxShadow: {
    'black': '2px 2px 8px #000',
    'white': '2px 2px 8px #fff',
   },
   gridTemplateColumns: {
    'auto':'repeat(auto-fill, minmax(250px, 1fr))',
   },
  },
 },
 plugins: [],
};

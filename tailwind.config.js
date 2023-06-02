/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        theme: {
          orange: "#da7d4a",
          "off-black": "#101010",
          "light-orange": "#fbaf85",
          "light-grey": "#f1f1f1",
          "off-white": "#fafafa",
        },
      },
      backgroundImage: {
        hero: "/public/assets/home/mobile/image-header.jpg",
        "hero-md": "/public/assets/home/tablet/image-header.jpg",
        "hero-lg": "/public/assets/home/desktop/image-hero.jpg",
      },
    },
  },
  plugins: [],
};

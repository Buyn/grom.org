/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{cljs,cljc,clj}",
    "./public/index.html"],
  theme: {
    extend: {
      colors: {

        ueava: {
            brown:{DEFAULT: "#4a2512",
                    50:  "#fcf1ee",
                    100: "#fae3dd",
                    200: "#f5c4b5",
                    300: "#f2a78c",
                    400: "#ee844e",
                    500: "#d07343", 
                    600: "#af5f37", 
                    700: "#924f2c",
                    800: "#733d21",
                    900: "#592e17",
                    950: "#4a2512",},
          sand: {DEFAULT: "#c6ab8b",
                    50:  "#fdfcfb",
                    100: "#faf6f2",
                    200: "#f4ede5",
                    300: "#efe3d7",
                    400: "#ebdac9",
                    500: "#e6d1ba", 
                    600: "#e2c8aa", 
                    700: "#ddbf9b",
                    800: "#d4b795",
                    900: "#caaf8e",
                    950: "#c6ab8b",},
          cream: "#f2ede7",
          light: "#e5d7c5"
        }

      }
    },},
    plugins: [],};

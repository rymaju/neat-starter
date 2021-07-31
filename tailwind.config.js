module.exports = {
  purge: {
    mode: "all",
    content: ["./**/*.html"],
    options: {
      whitelist: [],
    },
  },
  theme: {
    fontFamily: {
      'sans': ['Inter', 'ui-sans-serif', 'system-ui', 'Helvetica', 'Arial', 'sans-serif'],
     },
    container: {
      center: true,
    },
    extend: {
      keyframes: {
        growHeight: {
          "20%": { height: "100%" },

          "100%": { height: "0%" },
        },
        growDown: {
          "50%": { height: "0%" },

          "100%": { height: "100%" },
        },
        growWide: {
          "0%": { width: "0" },

          "100%": { width: "24rem" },
        },
        fadeIn: {
          "0%": { opacity: "0%" },
          "100%": { opacity: "100%" },
        }
      },
      animation: {
        growHeight: "growHeight 3s cubic-bezier(0.65, 0, 0.35, 1) forwards",
        growDown: "growDown 3s cubic-bezier(0.65, 0, 0.35, 1) forwards",
        growWide: "growWide 0.5s ease-in-out forwards",
        fadeIn: "fadeIn 1.5s cubic-bezier(0.65, 0, 0.35, 1) forwards"
      },
      colors: {},
      height: {
        "10v": "10vh",
        "20v": "20vh",
        "30v": "30vh",
        "40v": "40vh",
        "50v": "50vh",
        "60v": "60vh",
        "70v": "70vh",
        "80v": "80vh",
        "90v": "90vh",
        "100v": "100vh",
      },
      width: {
        "10v": "10vw",
        "20v": "20vw",
        "30v": "30vw",
        "40v": "40vw",
        "50v": "50vw",
        "60v": "60vw",
        "70v": "70vw",
        "80v": "80vw",
        "90v": "90vw",
        "100v": "100vw",
      },
    },
  },
  variants: {},
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
  ],
};

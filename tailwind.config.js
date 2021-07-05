module.exports = {
  purge: {
    mode: "all",
    content: ["./**/*.html"],
    options: {
      whitelist: [],
    },
  },
  theme: {
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
    },
  },
  variants: {},
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
  ],
};

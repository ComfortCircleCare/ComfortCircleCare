export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#1e40af",
        accent: "#FF7A59",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        heading: ["Poppins", "Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}

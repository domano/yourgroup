module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  enabled: process.env.NODE_ENV === "production",
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

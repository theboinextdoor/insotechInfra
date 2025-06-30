// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backdropBlur: {
        xs: '2px', // optional if using 'backdrop-blur-xs'
      },
    },
  },
  plugins: [],
};

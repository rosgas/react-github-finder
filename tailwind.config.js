module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          secondary: "#ec4899",
          "secondary-focus": "#db2777",
          "secondary-content": "#fff",
          accent: "#6ee7b7",
          "accent-content": "#2dd4bf",
        },
      },
    ],
  },
};

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
          primary: "#fff",
          secondary: "#ec4899",
          "secondary-focus": "#db2777",
          "secondary-content": "#fff",
          accent: "#6ee7b7",
          "accent-content": "#2dd4bf",
          "base-100": "#155e75",
          warning: "#FAD7A0",
        },
      },
    ],
  },
};

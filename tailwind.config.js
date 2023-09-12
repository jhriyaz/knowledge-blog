/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    mytheme: {
      primary: "#d8d847",
      secondary: "#c9f76c",
      accent: "#be56ff",
      neutral: "#312037",
      "base-100": "#2b2b4a",
      info: "#5f97d3",
      success: "#14a350",
      warning: "#fa8714",
      error: "#ea7b95",
    },
  },
  plugins: [require("daisyui")],
};

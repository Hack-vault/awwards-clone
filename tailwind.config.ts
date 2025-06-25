import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Google Material Design Blue
        "google-blue-50": "#E3F2FD",
        "google-blue-100": "#BBDEFB",
        "google-blue-200": "#90CAF9",
        "google-blue-300": "#64B5F6",
        "google-blue-400": "#42A5F5",
        "google-blue-500": "#2196F3", // Primary
        "google-blue-600": "#1E88E5",
        "google-blue-700": "#1976D2",
        "google-blue-800": "#1565C0",
        "google-blue-900": "#0D47A1",
        // Google Material Design Grey
        "google-grey-50": "#FAFAFA", // Often used for backgrounds
        "google-grey-100": "#F5F5F5",
        "google-grey-200": "#EEEEEE",
        "google-grey-300": "#E0E0E0", // Borders, dividers
        "google-grey-400": "#BDBDBD",
        "google-grey-500": "#9E9E9E", // Secondary text
        "google-grey-600": "#757575",
        "google-grey-700": "#616161", // Primary text
        "google-grey-800": "#424242",
        "google-grey-900": "#212121",
        // Google Material Design Red (for errors or destructive actions)
        "google-red-500": "#F44336",
        // Google Material Design Green (for success)
        "google-green-500": "#4CAF50",
        // Google Material Design Yellow (for warnings)
        "google-yellow-500": "#FFEB3B",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        "open-sans": ["Open Sans", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;

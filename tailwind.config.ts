import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        white: '#f3f3f3'
      }
    },
    screens: {
      sm: {max: '767px'},
      md: {min: '768px', max: '1023px'},
      lg: {min: '1024px', max: '1279px'},
      xl: {min: '1280px', max: '1535px'},
      '2xl': {min: '1536px'},
    }
  },
  plugins: [],
};
export default config;

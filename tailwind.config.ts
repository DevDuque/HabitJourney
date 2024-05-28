import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },

    colors: {
      transparent: 'transparent',
      appMain: '#1B998B',

      // TaskMain com diferentes opacidades
      taskMain: '#093631',
      taskMain75: '#093631BF',
      taskMain55: '#0936318C',
      taskMain35: '#09363159',
      taskMain20: '#09363133',

      // Margins
      marginMain: '#03110f',
      marginSecondary: '#98D1CB',
      marginLogo: '#656176',

      // Background
      backgroundMain: '#FCF9FF',

      // Text
      textMain: '#232229',
      textMain60: '#2322298C'
      },
  },
  plugins: [],
};
export default config;

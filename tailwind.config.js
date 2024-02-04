/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
        
          "primary": "#cd00f3",
                  
          "secondary": "#00ec64",
                  
          "accent": "#00caff",
                  
          "neutral": "#272829",
                  
          "base-100": "#1c1917",
                  
          "info": "#0098db",
                  
          "success": "#00c48a",
                  
          "warning": "#bf2100",
                  
          "error": "#ff3b54",
        },
      },
    ],
  },
  
  plugins: [require("daisyui"),require('tailwind-scrollbar')],
}
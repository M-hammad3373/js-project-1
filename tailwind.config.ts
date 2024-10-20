import { PluginAPI } from "tailwindcss/types/config";
import type { Config } from "tailwindcss";

function addVariableForColors({ addBase, theme }: PluginAPI) {
  const allColors = theme('colors', {}) || {};
  const newVars: Record<string, string> = {};

  Object.entries(allColors).forEach(([key, value]) => {

    if (typeof value === 'string') {
      newVars[`--${key}`] = value;
    } 

    else if (typeof value === 'object' && value !== null) {

      Object.entries(value).forEach(([subKey, subValue]) => {

        if (typeof subValue === 'string') {
          newVars[`--${key}-${subKey}`] = subValue;
        }
      });
    }
  });

  addBase({
    ':root': newVars,
  });
}

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
         theme: {

    // your existing config
    extend: {
      animation: {
        "meteor-effect": "meteor 5s linear infinite",
      },
      
      keyframes: {
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
      },
    },
  },
      },
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: "0",
            transform: "translate(-72%, -62%) scale(0.6)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%,-40%) scale(1)",
          },

          // movingBorder: {
          //   "0%": { border: '2px solid transparent', 'border-color': 'transparent' },
          //   "50%": { border: '2px solid var(--foreground)', 'border-color': 'var(--foreground)' },
          //   "100%": { border: '2px solid transparent', 'border-color': 'transparent' },
          // },
  
        },
      },
    },
  },
  animation: {
    "meteor-effect": "meteor 5s linear infinite",
  },
  keyframes: {
    meteor: {
      "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
      "70%": { opacity: "1" },
      "100%": {
        transform: "rotate(215deg) translateX(-500px)",
        opacity: "0",
      },
    },
  },
  
  plugins: [addVariableForColors],
};
export default config;

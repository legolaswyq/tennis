import type { Config } from "tailwindcss";

export default {
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
        primary: "var(--primary)",
        "primary-hover": "var(--primary-hover)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
        muted: "var(--muted)",
        border: "var(--border)",
        "tennis-green": {
          50: "#f4f9f4",
          100: "#e6f3e6",
          200: "#bfe3bf",
          300: "#97d397",
          400: "#70c270",
          500: "#48b248",
          600: "#3a8e3a",
          700: "#2b6b2b",
          800: "#1d471d",
          900: "#0e240e"
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif']
      },
      spacing: {
        '18': '4.5rem',
        '112': '28rem',
        '128': '32rem'
      },
      borderRadius: {
        '4xl': '2rem'
      }
    },
  },
  plugins: [],
} satisfies Config;

import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#F7F6F2",
        ink: "#14151A",
        muted: "#6B6E76",
        card: "#FFFFFF",
        border: "#E7E4DC",
        accent: {
          DEFAULT: "#3654F5",
          soft: "#EEF1FF",
          dark: "#26399C",
        },
        sage: {
          DEFAULT: "#4C7A64",
          soft: "#E9F1EC",
        },
        sand: "#EDE9DE",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      maxWidth: {
        content: "1240px",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;

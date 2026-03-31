/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        surface: {
          950: "#08111f",
          900: "#0d1726",
          800: "#132032",
          700: "#1b2b40"
        },
        ink: {
          50: "#f4f7fb",
          100: "#d7dfeb",
          200: "#9ba8ba",
          300: "#7d8a9d"
        },
        accent: {
          400: "#4fd1c5",
          500: "#2dd4bf",
          600: "#14b8a6"
        }
      },
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", "'Pretendard Variable'", "sans-serif"],
        mono: ["'IBM Plex Mono'", "monospace"]
      },
      boxShadow: {
        card: "0 24px 80px rgba(8, 17, 31, 0.4)"
      },
      keyframes: {
        reveal: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      },
      animation: {
        reveal: "reveal 0.6s ease-out both"
      }
    }
  },
  plugins: []
};

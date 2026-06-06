import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx,mdx}"],
  safelist: [
    "from-gold-300/70",
    "from-emerald-100",
    "from-cyan-100",
    "via-white/80",
    "to-sky-100/70",
    "to-gold-200/80"
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1440px"
      }
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))"
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))"
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))"
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))"
        },
        gold: {
          50: "#fff9e6",
          100: "#f8e6a4",
          300: "#e6c35c",
          500: "#c99824",
          700: "#8d6510",
          900: "#3e2b05"
        },
        ink: "#151412"
      },
      borderRadius: {
        xl: "0.75rem",
        lg: "0.5rem",
        md: "0.375rem"
      },
      boxShadow: {
        glow: "0 20px 80px rgba(201, 152, 36, 0.25)",
        glass: "inset 0 1px 0 rgba(255,255,255,0.65), 0 24px 70px rgba(40,32,13,0.12)"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "Segoe UI", "Arial", "sans-serif"]
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" }
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" }
        }
      },
      animation: {
        shimmer: "shimmer 8s ease infinite",
        float: "float 7s ease-in-out infinite"
      }
    }
  },
  plugins: [animate]
};

export default config;

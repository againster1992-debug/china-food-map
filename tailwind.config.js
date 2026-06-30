/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        // 宣纸米白系
        paper: {
          50: "#FBF7EC",
          100: "#F5EFE0",
          200: "#EBE3CC",
          300: "#DCD0AE",
          400: "#C8B98A",
        },
        // 墨色系
        ink: {
          50: "#F2F0EC",
          100: "#D9D4CB",
          200: "#B8B2A6",
          300: "#8C857A",
          400: "#4A4239",
          500: "#3A332C",
          600: "#2F2A24",
          700: "#2A2520",
          900: "#1A1614",
        },
        // 朱砂红
        cinnabar: {
          50: "#FBEAE7",
          100: "#F5D3CD",
          200: "#EDBBB3",
          300: "#E28A7E",
          400: "#D85A4D",
          500: "#C8392E",
          600: "#A82D24",
          700: "#821F18",
        },
        // 靛青
        indigo2: {
          50: "#E8EFF4",
          100: "#C9D9E4",
          200: "#A4BFD0",
          300: "#6F92AB",
          400: "#4A7A95",
          500: "#2C5F7C",
          600: "#1F4A62",
          700: "#163649",
        },
        // 赭石
        ochre: {
          300: "#D29A77",
          400: "#B8744A",
          500: "#A0623A",
          600: "#83502F",
        },
        // 金箔
        gold: {
          300: "#E6CB8E",
          400: "#D9B978",
          500: "#C9A961",
          600: "#A88B47",
        },
      },
      fontFamily: {
        // 统一为 2 个字体：Noto Sans SC（正文）+ Noto Serif SC（装饰/标题）
        // 两者均完整覆盖中文、英文、数字
        sans: ['"Noto Sans SC"', "system-ui", "-apple-system", "sans-serif"],
        serif: ['"Noto Serif SC"', '"Noto Sans SC"', "serif"],
        display: ['"Noto Serif SC"', '"Noto Sans SC"', "serif"],
        latin: ['"Noto Serif SC"', '"Noto Sans SC"', "serif"],
      },
      boxShadow: {
        ink: "0 8px 30px -8px rgba(26, 22, 20, 0.25), 0 2px 8px -2px rgba(26, 22, 20, 0.15)",
        seal: "0 2px 8px rgba(200, 57, 46, 0.35)",
        panel: "0 12px 40px -12px rgba(26, 22, 20, 0.35)",
      },
      backgroundImage: {
        "paper-texture":
          "radial-gradient(circle at 20% 30%, rgba(220, 208, 174, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(184, 116, 74, 0.08) 0%, transparent 50%)",
      },
      animation: {
        "fade-in": "fadeIn 0.4s ease-out",
        "slide-in-right": "slideInRight 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-in-left": "slideInLeft 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-in-up": "slideInUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        "scale-in": "scaleIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideInRight: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInUp: {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

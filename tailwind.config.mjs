/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          base: "var(--bg-base)",
          1: "var(--bg-elev-1)",
          2: "var(--bg-elev-2)",
        },
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
        },
        accent: "var(--accent)",
        success: "var(--success)",
        warning: "var(--warning)",
        hairline: "var(--hairline)",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      borderRadius: {
        card: "var(--radius-card)",
        pill: "var(--radius-pill)",
      },
      maxWidth: {
        content: "1100px",
        prose: "68ch",
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.025em",
      },
      fontSize: {
        display: ["clamp(2.5rem, 5vw + 1rem, 4.5rem)", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
        hero: ["clamp(2rem, 3vw + 1rem, 3rem)", { lineHeight: "1.1", letterSpacing: "-0.025em" }],
      },
    },
  },
  plugins: [],
};

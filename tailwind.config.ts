import type { Config } from "tailwindcss"

export default {
  content: ["./src/**/*.{ts,tsx}", "./popup.tsx", "./options.tsx"],
  theme: {
    extend: {
      colors: {
        brand: "#2563eb"
      }
    }
  },
  plugins: []
} satisfies Config

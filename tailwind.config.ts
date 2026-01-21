import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./app/**/*.{ts,tsx}",
        "./src/**/*.{ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#3A1F5C',
                    foreground: '#ffffff',
                },
                secondary: {
                    DEFAULT: '#1a1025', // Darker shade for contrast
                    foreground: '#ffffff',
                }
            },
            fontFamily: {
                sans: ["var(--font-inter)"],
                heading: ["var(--font-jakarta)"],
            }
        },
    },
    plugins: [require("tailwindcss-animate")],
} satisfies Config;

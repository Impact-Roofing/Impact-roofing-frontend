// tailwind.config.ts — merge this into your existing theme.extend

import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
        "./features/**/*.{js,ts,jsx,tsx,mdx}",
        "./shared/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["var(--font-montserrat)", "sans-serif"], // default body font
                jost: ["var(--font-jost)", "sans-serif"],         // headings
            },
        },
    },
    plugins: [],
};

export default config;
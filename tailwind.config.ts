import type { Config } from "tailwindcss";
import { withUt } from "uploadthing/tw"

export default withUt(
	{
		darkMode: ["class"],
		content: [
			"./components/**/*.{js,ts,jsx,tsx,mdx}",
			"./app/**/*.{js,ts,jsx,tsx,mdx}",
			"./src/**/*.{js,ts,jsx,tsx,mdx}",
		],
		theme: {
			extend: {
				colors: {
					primary: {
						DEFAULT: 'hsl(var(--primary))', // Light mode: Brown
						foreground: 'hsl(var(--primary-foreground))', // Light mode: Beige
					},
					secondary: {
						DEFAULT: 'hsl(var(--secondary))', // Light mode: Beige
						foreground: 'hsl(var(--secondary-foreground))', // Light mode: Brown
					},
					lavender: {
						DEFAULT: 'hsl(270, 45%, 85%)', // Dark mode: Lavender
						foreground: 'hsl(0, 0%, 100%)', // Dark mode: White
					},
					background: 'hsl(var(--background))',
					foreground: 'hsl(var(--foreground))',
					card: {
						DEFAULT: 'hsl(var(--card))',
						foreground: 'hsl(var(--card-foreground))'
					},
					popover: {
						DEFAULT: 'hsl(var(--popover))',
						foreground: 'hsl(var(--popover-foreground))'
					},
					muted: {
						DEFAULT: 'hsl(var(--muted))',
						foreground: 'hsl(var(--muted-foreground))'
					},
					accent: {
						DEFAULT: 'hsl(var(--accent))',
						foreground: 'hsl(var(--accent-foreground))'
					},
					destructive: {
						DEFAULT: 'hsl(var(--destructive))',
						foreground: 'hsl(var(--destructive-foreground))'
					},
					border: 'hsl(var(--border))',
					input: 'hsl(var(--input))',
					ring: 'hsl(var(--ring))',
					chart: {
						'1': 'hsl(var(--chart-1))',
						'2': 'hsl(var(--chart-2))',
						'3': 'hsl(var(--chart-3))',
						'4': 'hsl(var(--chart-4))',
						'5': 'hsl(var(--chart-5))'
					}
				},
				borderRadius: {
					lg: 'var(--radius)',
					md: 'calc(var(--radius) - 2px)',
					sm: 'calc(var(--radius) - 4px)'
				}
			}
		},
		plugins: [require("tailwindcss-animate")],
	}

) satisfies Config;

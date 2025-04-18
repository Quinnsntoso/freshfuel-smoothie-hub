
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Freshfuel Primary Colors
				freshfuel: {
					warmBeige: "#030260",
					mustard: "#1A30B4",
					rhubarb: "#702525",
					pomegranate: "#BD1111",
					pearGreen: "#ECB344",
					pineGreen: "#3E502B",
					// Secondary Colors
					muteBlack: "#242424",
					windhamCream: "#E8DAAA",
					violet: "#8E19A6",
					lavender: "#F8D4FA",
					lightGrey: "#EFEFEF",
					white: "#FFFFFF"
				}
			},
			fontFamily: {
				heading: ['Zen Maru Gothic', 'sans-serif'], // Using Zen Maru Gothic as an alternative to Gen Jyuu Gothic
				body: ['Poppins', 'sans-serif'],
				sans: ['Poppins', 'sans-serif'],
				alt: ['Space Grotesk', 'sans-serif'] // Alternative to Neue Machina
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'carousel-left': {
					'0%, 100%': { transform: 'translateX(0)' },
					'50%': { transform: 'translateX(-5%)' },
				},
				'carousel-right': {
					'0%, 100%': { transform: 'translateX(0)' },
					'50%': { transform: 'translateX(5%)' },
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 3s ease-in-out infinite',
				'carousel-left': 'carousel-left 2s ease-in-out infinite',
				'carousel-right': 'carousel-right 2s ease-in-out infinite',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

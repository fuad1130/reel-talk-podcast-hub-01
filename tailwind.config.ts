
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
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				cinema: {
					purple: '#8B5CF6',
					darkPurple: '#1A1F2C',
					blue: '#0EA5E9',
					darkBlue: '#172554',
					lightGray: '#F1F0FB',
					amber: '#F59E0B',
					crimson: '#DC2626',
					teal: '#14B8A6',
					warmGray: '#292524',
					red: '#e11d48',
					darkRed: '#881337',
					yellow: '#fbbf24',
				},
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
				'pulse-slow': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.8' },
				},
				'subtle-float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-5px)' },
				},
				'flicker': {
					'0%, 100%': { opacity: '1' },
					'25%': { opacity: '0.9' },
					'50%': { opacity: '1' },
					'75%': { opacity: '0.85' },
				},
				'film-reel': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-100%)' },
        }
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'pulse-slow': 'pulse-slow 4s ease-in-out infinite',
				'subtle-float': 'subtle-float 6s ease-in-out infinite',
				'flicker': 'flicker 3s ease-in-out infinite',
				'film-reel': 'film-reel 20s linear infinite',
			},
			backgroundImage: {
				'grain': "url('/noise.png')",
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'grain-overlay': "url('/grain-overlay.png')",
				'film-texture': "url('/film-texture.png')",
				'film-strip': "url('/lovable-uploads/d373a313-fe5c-4306-a6aa-030ba4eac4d7.png')",
			},
			fontFamily: {
				'cinematic': ['Playfair Display', 'serif'],
				'mono-alt': ['Space Mono', 'monospace'],
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

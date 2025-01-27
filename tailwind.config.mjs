/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			boxShadow: {
				menu: "0px 2px 12px 0px rgba(84, 84, 102, 0.16)",
			},
			keyframes: {
				slideUp: {
					"0%": { transform: "translateY(40px)", opacity: "0" },
					"100%": { transform: "translateY(0)", opacity: "1" },
				},
				slideDown: {
					"0%": { transform: "translateY(-40px)", opacity: "0" },
					"100%": { transform: "translateY(0)", opacity: "1" },
				},
			},
			animation: {
				slideUp: "slideUp 2s ease-out forwards",
				slideDown: "slideDown 2s ease-out forwards",
			},
		},
	},
	plugins: [],
};

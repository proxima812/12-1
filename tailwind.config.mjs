/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				blue: "#2D81E0",
				green: "#4BB34B",
				gray: "#818C99",
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
}

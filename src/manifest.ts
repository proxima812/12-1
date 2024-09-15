// Type imports
import type { ManifestOptions } from "vite-plugin-pwa"
import { config } from "./settings"

/**
 * Defines the configuration for PWA webmanifest.
 */
export const manifest: Partial<ManifestOptions> = {
	name: "12 шагов | 12x12", // Change this to your website's name.
	short_name: "12x12 сайт", // Change this to your website's short name.
	description: config.site.OG.description, // Change this to your websites description.
	theme_color: "#fff", // Change this to your primary color.
	background_color: "#ffffff", // Change this to your background color.
	display: "minimal-ui",
	// icons: [
	// 	{
	// 		src: "/favicons/favicon-192x192.png",
	// 		sizes: "192x192",
	// 		type: "image/png",
	// 	},
	// 	{
	// 		src: "/favicons/favicon-512x512.png",
	// 		sizes: "512x512",
	// 		type: "image/png",
	// 	},
	// 	{
	// 		src: "/favicons/favicon-512x512.png",
	// 		sizes: "512x512",
	// 		type: "image/png",
	// 		purpose: "any maskable",
	// 	},
	// ],
}

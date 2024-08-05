import { defineConfig } from "astro/config";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
	site: "https://astro-cloudflare-starter.pages.dev",
	scopedStyleStrategy: "class",
	security: {
		checkOrigin: true,
	},
	build: {
		assets: "assets",
		inlineStylesheets: "never",
	},
	prefetch: {
		prefetchAll: false,
		defaultStrategy: "viewport",
	},
	i18n: {
		defaultLocale: "es",
		locales: ["es"],
	},
	output: "server",
	adapter: cloudflare({
		imageService: "compile",
		platformProxy: {
			enabled: true,
		},
	}),
});

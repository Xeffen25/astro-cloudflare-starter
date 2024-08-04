/** @type {import("prettier").Config} */
export default {
	tabWidth: 4,
	useTabs: true,
	quoteProps: "consistent",
	plugins: ["prettier-plugin-astro"],
	overrides: [
		{
			files: "*.astro",
			options: {
				parser: "astro",
			},
		},
	],
};

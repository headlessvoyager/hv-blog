// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Headless Voyager";
export const SITE_DESCRIPTION =
	"Welcome to my blog! I write about software devepoment.";
export const TWITTER_HANDLE = "@yourtwitterhandle";
export const MY_NAME = "Headless Voyager";

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;

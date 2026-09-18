/**
 * This worker redirects my short and memorable links to my pages.
 */
const Links = {
	'/linkedin': 'https://www.linkedin.com/in/udbhav-sai-kukkadapu-a36a93287/',
	'/github': 'https://github.com/udbhav07',
	'/portfolio': 'https://udbhavsai.com',
	'': 'https://udbhavsai.com',
};

export default {
	async fetch(request, env, ctx) {
		const url = new URL(request.url);
		const path = url.pathname.toLowerCase().replace(/\/+$/, '');
		const target = Links[path] ?? Links[''];
		return Response.redirect(target, 302);
	},
};

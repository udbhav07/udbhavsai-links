/**
 * This worker redirects my short and memorable links to my pages.
 */
const Links = {
	'/linkedin': 'https://www.linkedin.com/in/udbhav-sai-kukkadapu-a36a93287/',
	'/github': 'https://github.com/udbhav07',
	'/portfolio': 'https://udbhavsai.com',
	'': 'https://udbhavsai.com',
};

const Aliases = {
	'/linkedin': ['/linkdin'],
	'/github': ['/git', '/gith'],
};

// Flipped once at startup: alternate name → official key
const AliasLookup = {};
for (const [canonical, names] of Object.entries(Aliases)) {
	for (const name of names) {
		AliasLookup[name] = canonical;
	}
}

export default {
	async fetch(request, env, ctx) {
		const url = new URL(request.url);
		const path = url.pathname.toLowerCase().replace(/\/+$/, '');
		const canonical = AliasLookup[path] ?? path;
		const target = Links[canonical] ?? Links[''];
		return Response.redirect(target, 302);
	},
};

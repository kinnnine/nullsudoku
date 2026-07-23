module.exports = {
	globDirectory: 'build',
	globPatterns: [
		'**/*.{txt,json,png,ico,html,css,map}'
	],
	swDest: 'build/service-worker.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/,
		/^s/
	]
};
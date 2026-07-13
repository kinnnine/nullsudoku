module.exports = {
	globDirectory: 'build',
	globPatterns: [
		'**/*.{txt,json,png,ico}'
	],
	swDest: 'build/service-worker.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/,
		/^s/
	]
};
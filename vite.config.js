const { createVuePlugin } = require("vite-plugin-vue2");

module.exports = {
	plugins: [createVuePlugin(/*options*/)],
	build: {
		outDir: "docs",
	},
	// server: {
	// 	host: "192.168.1.100",
	// 	port: 3000,
	// },
};

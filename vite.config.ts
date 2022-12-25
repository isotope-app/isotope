import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import WindiCSS from "vite-plugin-windicss";
import nodePolyfills from "vite-plugin-node-stdlib-browser";

export default defineConfig({
	plugins: [nodePolyfills(), solidPlugin(), WindiCSS()],
	server: {
		port: 3000,
	},
	build: {
		target: "esnext",
	},
});

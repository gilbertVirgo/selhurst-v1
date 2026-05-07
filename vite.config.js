import react, { reactCompilerPreset } from "@vitejs/plugin-react";

import babel from "@rolldown/plugin-babel";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
	server: {
		allowedHosts: [
			"6fab-2a02-6b6f-e3a7-6a00-5118-a05f-ed66-9569.ngrok-free.app",
		],
	},
	plugins: [
		tailwindcss(),
		react(),
		babel({ presets: [reactCompilerPreset()] }),
	],
});

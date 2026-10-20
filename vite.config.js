import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// One HTML file per page of the site. Keep this list in step with src/pages.js.
const PAGE_FILES = ['index', 'research', 'experience', 'projects', 'honors'];

// base './' makes the built site work from any URL path,
// including a GitHub Pages project site like username.github.io/repo-name.
export default defineConfig({
	base: './',
	plugins: [react()],
	build: {
		rollupOptions: {
			// Build every page, not just index.html
			input: Object.fromEntries(
				PAGE_FILES.map(name => [name, fileURLToPath(new URL(`./${name}.html`, import.meta.url))]),
			),
		},
	},
});

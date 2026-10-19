import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base './' makes the built site work from any URL path,
// including a GitHub Pages project site like username.github.io/repo-name.
export default defineConfig({
	base: './',
	plugins: [react()],
});

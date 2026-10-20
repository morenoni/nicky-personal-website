// The site's pages, in the order they appear in the menu. Each page has an id (matching the
// data-page in its HTML file), a label for the menu, the address of its HTML file, and the
// component that shows its content. Keep the ids in step with PAGE_FILES in vite.config.js.

import About from './panels/About/About.jsx';
import Research from './panels/Research.jsx';
import Experience from './panels/Experience.jsx';
import Projects from './panels/Projects.jsx';
import Honors from './panels/Honors.jsx';

export const PAGES = [
	{ id: 'about', label: 'About', href: './', Panel: About },
	{ id: 'research', label: 'Research', href: 'research.html', Panel: Research },
	{ id: 'experience', label: 'Experience', href: 'experience.html', Panel: Experience },
	{ id: 'projects', label: 'Projects', href: 'projects.html', Panel: Projects },
	{ id: 'honors', label: 'Honors', href: 'honors.html', Panel: Honors },
];

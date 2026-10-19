// The site's tabs, in the order they appear. Each tab has an id (used in the URL, like #about),
// a label for the tab bar, and the component that shows its content.

import About from './panels/About/About.jsx';
import Research from './panels/Research.jsx';
import Experience from './panels/Experience.jsx';
import Projects from './panels/Projects.jsx';
import Honors from './panels/Honors.jsx';

export const TABS = [
	{ id: 'about', label: 'About', Panel: About },
	{ id: 'research', label: 'Research', Panel: Research },
	{ id: 'experience', label: 'Experience', Panel: Experience },
	{ id: 'projects', label: 'Projects', Panel: Projects },
	{ id: 'honors', label: 'Honors', Panel: Honors },
];

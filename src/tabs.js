// The site's tabs, in the order they appear. Each tab has an id (used in the URL, like #about),
// a label for the tab bar, and the component that shows its content.

import About from './panels/About/About.jsx';

export const TABS = [
	{ id: 'about', label: 'About', Panel: About },
];

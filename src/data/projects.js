// Projects shown on the Projects tab. See components/Card.jsx for what each field does.
import { codeLink, paperLink, posterLink } from './links.js';

export const PROJECTS = [
	{
		title: 'Scamper IDE Accessibility',
		meta: 'Glimmer Research Lab',
		summary: 'A screen reader- and keyboard-accessible Abstract Syntax Tree for a web-based Scheme IDE, built with ARIA, keyboard-navigation audits, and CodeMirror auto-indentation.',
		links: [codeLink('https://github.com/jakerss2/scamperAccessibility.git')],
	},
	{
		title: 'Multi-Agent RL for Autonomous Driving',
		meta: 'Artificial Intelligence Course Project',
		formats: ['paper', 'poster'],
		summary: 'Extended Q-Learning, CK, CoLF, and CK-CoLF to a Webots intersection with three self-driving cars. Across 100 trials of 200,000 episodes, CK-CoLF best balanced convergence speed and cooperation.',
		links: [
			codeLink('https://github.com/khanhdo05/mas-cooperation'),
			paperLink('./papers/multi-agent-rl.pdf'),
			posterLink('./posters/multi-agent-rl.pdf'),
		],
	},
];

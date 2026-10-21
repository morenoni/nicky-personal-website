// Projects shown on the Projects tab, in the order they appear. See components/Card.jsx for what each field does.
import { codeLink, paperLink, posterLink } from './links.js';

export const PROJECTS = [
	{
		title: 'UniCab',
		meta: 'CSC 324 Project',
		summary: 'A rideshare iOS app where drivers post rides and riders request seats, built with Swift and Supabase.',
		status: 'In Progress...',
	},
	{
		title: 'Multi-Agent RL for Autonomous Driving',
		meta: 'Artificial Intelligence Project',
		formats: ['paper', 'poster'],
		summary: 'Extended Q-Learning, CK, CoLF, and CK-CoLF to a Webots intersection with three self-driving cars. Across 100 trials of 200,000 episodes, CK-CoLF best balanced convergence speed and cooperation.',
		links: [
			codeLink('https://github.com/khanhdo05/mas-cooperation'),
			paperLink('./papers/multi-agent-rl.pdf'),
			posterLink('./posters/multi-agent-rl.pdf'),
		],
	},
	{
		title: 'Scamper IDE Accessibility',
		meta: 'Glimmer Research Lab',
		summary: 'A screen reader- and keyboard-accessible Abstract Syntax Tree for a web-based Scheme IDE, built with ARIA, keyboard-navigation audits, and CodeMirror auto-indentation.',
		links: [codeLink('https://github.com/jakerss2/scamperAccessibility.git')],
	},
	{
		title: 'NBA Stats Comparison App',
		meta: 'STA 230 Project',
		summary: "An interactive R Shiny app for comparing NBA players' shot attempts, shooting accuracy, season totals, and progression over ten seasons.",
		links: [codeLink('https://github.com/morenoni/NBA-stats-comparatives-W-RShiny')],
	},
	{
		title: 'Bit Trees and Braille',
		meta: 'CSC 207 Project',
		summary: 'A Java command-line tool that uses bit trees to translate between braille, ASCII, and Unicode.',
		links: [codeLink('https://github.com/morenoni/mp-bit-trees-maven')],
	},
];

// Papers shown on the Research tab. See components/Card.jsx for what each field does.
import { paperLink, posterLink } from './links.js';

export const RESEARCH = [
	{
		title: 'Enhancing Accessibility of a Web-based Scheme IDE to Improve Inclusion in Computing',
		meta: 'First author · TAPIA 2026',
		formats: ['paper', 'poster'],
		summary: 'Making the Scamper IDE accessible to blind, low-vision, and neurodivergent learners.',
		links: [paperLink('./papers/tapia-2026.pdf'), posterLink('./posters/tapia-2026.pdf')],
	},
	{
		title: 'Visualizing and Sonifying Abstract Syntax Trees for Accessibility',
		meta: 'First author · SIGCSE TS 2026',
		formats: ['paper', 'poster'],
		summary: 'Supporting neurodiverse and blind and low-vision users in an educational IDE.',
		links: [paperLink('https://doi.org/10.1145/3770761.3777158'), posterLink('./posters/sigcse-2026-ast.pdf')],
	},
	{
		title: 'An Innovative Approach to Parsons Problems for Functional Programming',
		meta: 'Co-author · SIGCSE TS 2026',
		formats: ['paper', 'poster'],
		summary: 'A new take on Parsons problems for teaching and learning functional programming.',
		links: [paperLink('https://doi.org/10.1145/3770762.3772625'), posterLink('./posters/sigcse-2026-parsons.pdf')],
	},
	{
		title: "'Born Accessible' Visualizers for Scheme Program State",
		meta: 'Co-author · SIGCSE TS 2026',
		formats: ['paper', 'poster'],
		summary: 'Visualizers for Scheme program state designed to be accessible from the start.',
		links: [paperLink('https://doi.org/10.1145/3770761.3777157'), posterLink('./posters/sigcse-2026-visualizers.pdf')],
	},
];

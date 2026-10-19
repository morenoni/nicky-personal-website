// One renderer for every list of cards (Research, Experience, Projects, Honors).
// Each card is built from an item with these optional fields:
//   emoji    decorative icon shown before the title
//   title    card heading
//   meta     small line under the heading (role, venue, dates...)
//   formats  true to show the Paper and Poster badges next to the meta line
//   summary  short description
//   link     { href, label } for a "Read the paper" / "View the code" link

import { el, icon, decorative } from './dom.js';

const FORMATS = [
	{ icon: 'i-paper', label: 'Paper' },
	{ icon: 'i-poster', label: 'Poster' },
];

// The Paper and Poster badges, announced as a list called "Formats"
const badges = () => el('ul', { class: 'badges', 'aria-label': 'Formats' },
	...FORMATS.map(({ icon: id, label }) => el('li', { class: 'badge' }, icon(id), label)));

// A link that also names its card for screen readers, since "Read the paper" repeats on every card
const cardLink = ({ href, label }, title) =>
	el('a', { href }, label, el('span', { class: 'sr-only' }, `: ${title}`));

// The card title, with its decorative emoji (if any) in front
const heading = (emoji, title) =>
	el('h3', {}, ...(emoji ? [decorative(emoji), ` ${title}`] : [title]));

function card({ emoji, title, meta, formats, summary, link }) {
	const node = el('article', { class: 'card' }, heading(emoji, title));

	if (meta) {
		const metaLine = el('p', { class: 'meta' }, meta);
		node.append(formats ? el('div', { class: 'meta-row' }, metaLine, badges()) : metaLine);
	}
	if (summary) node.append(el('p', {}, summary));
	if (link) node.append(cardLink(link, title));
	return node;
}

export function renderCards(container, items) {
	container.replaceChildren(...items.map(card));
}

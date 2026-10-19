// Links to other sites open in a new tab, and screen readers are told so.
// Run this after the cards are rendered, so the generated links are included.

import { el } from './dom.js';

export function decorateExternalLinks() {
	document.querySelectorAll('a[href^="http"]').forEach(link => {
		link.target = '_blank';
		link.rel = 'noopener noreferrer';   // keeps the new tab from controlling this one
		link.append(el('span', { class: 'sr-only' }, ' (opens in a new tab)'));
	});
}

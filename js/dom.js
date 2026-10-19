// Small helpers for building page elements from data.

const SVG_NS = 'http://www.w3.org/2000/svg';

// el('p', { class: 'meta' }, 'text', otherNode) -> <p class="meta">text...</p>
// Attributes are set with setAttribute, so 'class', 'aria-label' and 'datetime' all work as written.
export function el(tag, attrs = {}, ...children) {
	const node = document.createElement(tag);
	Object.entries(attrs).forEach(([name, value]) => node.setAttribute(name, value));
	node.append(...children);
	return node;
}

// An icon from the sprite in index.html (decorative, so hidden from screen readers)
export function icon(id) {
	const svg = document.createElementNS(SVG_NS, 'svg');
	svg.setAttribute('class', 'icon');
	svg.setAttribute('aria-hidden', 'true');
	svg.setAttribute('focusable', 'false');
	const use = document.createElementNS(SVG_NS, 'use');
	use.setAttribute('href', `#${id}`);
	svg.append(use);
	return svg;
}

// An emoji used as decoration, hidden from screen readers
export const decorative = emoji => el('span', { 'aria-hidden': 'true' }, emoji);

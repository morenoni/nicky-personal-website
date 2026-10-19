// A decorative icon. It is hidden from screen readers, so always put a text label next to it.

import { ICONS } from '../icons.js';

export default function Icon({ name }) {
	return (
		<svg className="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
			<path d={ICONS[name]} />
		</svg>
	);
}

// Decides whether the top bar should collapse into the menu button.
// It collapses whenever the page links do not fit on one line next to the site name,
// and always on phone-sized screens, where the page layout is stacked anyway.

import { useLayoutEffect, useState } from 'react';

const PHONE = '(max-width: 760px)';

export default function useCompactBar(barRef) {
	const [compact, setCompact] = useState(false);

	useLayoutEffect(() => {
		const bar = barRef.current;
		const phone = window.matchMedia(PHONE);

		// Measures the invisible, uncollapsed copy of the bar (see TopBar.css)
		const update = () => {
			const ruler = bar.querySelector('.topbar-ruler');
			const links = ruler.querySelector('.nav-links');
			const wrapped = links.offsetTop > ruler.querySelector('.brand').offsetTop + 8;
			const overflowing = links.scrollWidth > links.clientWidth;
			setCompact(phone.matches || wrapped || overflowing);
		};

		const observer = new ResizeObserver(update);
		observer.observe(bar);
		phone.addEventListener('change', update);
		document.fonts.ready.then(update);   // text may be wider once the fonts load
		update();

		return () => {
			observer.disconnect();
			phone.removeEventListener('change', update);
		};
	}, [barRef]);

	return compact;
}

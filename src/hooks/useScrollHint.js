// Tells whether a scrolling box still has content hidden below, so the page can show a
// "Scroll for more" hint while there is something left to scroll to.

import { useLayoutEffect, useState } from 'react';

export default function useScrollHint(ref) {
	const [hasMore, setHasMore] = useState(false);

	useLayoutEffect(() => {
		const box = ref.current;
		const update = () => setHasMore(box.scrollHeight - box.clientHeight - box.scrollTop > 4);

		box.addEventListener('scroll', update);
		const observer = new ResizeObserver(update);
		observer.observe(box);
		update();

		return () => {
			box.removeEventListener('scroll', update);
			observer.disconnect();
		};
	}, [ref]);

	return hasMore;
}

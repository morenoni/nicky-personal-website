// Which tab is showing. It starts from the URL hash (#research opens Research),
// follows the hash when it changes, and keeps the page title and URL up to date.

import { useEffect, useState } from 'react';
import { SITE_NAME } from '../site.js';

export default function useActiveTab(tabs) {
	// The tab named by the hash, if any (other hashes, like the skip link's, are ignored)
	const tabFromHash = () => tabs.find(tab => tab.id === window.location.hash.slice(1));

	const [activeId, setActiveId] = useState(() => (tabFromHash() ?? tabs[0]).id);

	useEffect(() => {
		const onHashChange = () => {
			const tab = tabFromHash();
			if (tab) setActiveId(tab.id);
		};
		window.addEventListener('hashchange', onHashChange);
		return () => window.removeEventListener('hashchange', onHashChange);
	});

	useEffect(() => {
		const { label } = tabs.find(tab => tab.id === activeId);
		document.title = `${label} · ${SITE_NAME}`;
		window.history.replaceState(null, '', `#${activeId}`);
		window.scrollTo(0, 0);
	}, [activeId, tabs]);

	return [activeId, setActiveId];
}

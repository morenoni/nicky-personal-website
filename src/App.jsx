// One page of the site: skip link, top bar with the menu, and the content of the current page.

import SkipLink from './components/SkipLink.jsx';
import TopBar from './components/TopBar.jsx';
import { PAGES } from './pages.js';
import { SITE_NAME } from './site.js';

export default function App({ pageId }) {
	const page = PAGES.find(({ id }) => id === pageId) ?? PAGES[0];

	return (
		<>
			<SkipLink />
			<TopBar pages={PAGES} currentId={page.id} />
			<main id="main" tabIndex={-1}>
				{/* One page-level heading for screen readers; each page starts with an h2 */}
				<h1 className="sr-only">{SITE_NAME}</h1>
				<page.Panel />
			</main>
		</>
	);
}

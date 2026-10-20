// The whole site: skip link, top bar with tabs, and one panel per tab.

import SkipLink from './components/SkipLink.jsx';
import TopBar from './components/TopBar.jsx';
import TabPanel from './components/TabPanel.jsx';
import useActiveTab from './hooks/useActiveTab.js';
import { TABS } from './tabs.js';
import { SITE_NAME } from './site.js';

export default function App() {
	const [activeId, setActiveId] = useActiveTab(TABS);

	return (
		<>
			<SkipLink />
			<TopBar tabs={TABS} activeId={activeId} onSelect={setActiveId} />
			<main id="main" tabIndex={-1}>
				{/* One page-level heading for screen readers; each tab starts with an h2 */}
				<h1 className="sr-only">{SITE_NAME}</h1>
				{TABS.map(({ id, Panel }) => (
					<TabPanel key={id} id={id} active={id === activeId}>
						<Panel />
					</TabPanel>
				))}
			</main>
		</>
	);
}

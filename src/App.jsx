// The whole site. Components are added here one by one.

import SkipLink from './components/SkipLink.jsx';
import { SITE_NAME } from './site.js';

export default function App() {
	return (
		<>
			<SkipLink />
			<main id="main" tabIndex={-1}>
				{/* One page-level heading for screen readers; each tab starts with an h2 */}
				<h1 className="sr-only">{SITE_NAME}</h1>
			</main>
		</>
	);
}

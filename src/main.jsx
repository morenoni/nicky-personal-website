// Entry point, shared by every page. Each HTML file names its page in data-page
// (for example data-page="research"), and the app shows that page.

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/theme.css';
import './styles/base.css';
import './styles/layout.css';
import App from './App.jsx';
import './styles/contrast.css';   // last, so it can override the component styles

const root = document.getElementById('root');

createRoot(root).render(
	<StrictMode>
		<App pageId={root.dataset.page} />
	</StrictMode>,
);

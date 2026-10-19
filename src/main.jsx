// Entry point: loads the global styles and mounts the React app into the page.

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/theme.css';
import './styles/base.css';
import './styles/layout.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<App />
	</StrictMode>,
);

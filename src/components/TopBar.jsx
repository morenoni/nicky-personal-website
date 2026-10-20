// The navy top bar: site name, the links to each page, and (when the links do not fit
// on one line) a menu button that folds them away.

import { useRef, useState } from 'react';
import Icon from './Icon.jsx';
import useCompactBar from '../hooks/useCompactBar.js';
import { SITE_NAME } from '../site.js';
import './TopBar.css';

export default function TopBar({ pages, currentId }) {
	const barRef = useRef(null);
	const toggleRef = useRef(null);
	const [menuOpen, setMenuOpen] = useState(false);

	const compact = useCompactBar(barRef);
	const open = compact && menuOpen;

	// Escape closes the menu and returns focus to the menu button
	const handleKeyDown = event => {
		if (event.key === 'Escape' && open) {
			setMenuOpen(false);
			toggleRef.current.focus();
		}
	};

	return (
		<header
			ref={barRef}
			className={`topbar${compact ? ' compact' : ''}${open ? ' menu-open' : ''}`}
			onKeyDown={handleKeyDown}
		>
			<a className="brand" href="./">{SITE_NAME}</a>

			<button
				ref={toggleRef}
				className="menu-toggle"
				type="button"
				aria-expanded={open}
				aria-controls="site-nav"
				aria-label="Menu"
				onClick={() => setMenuOpen(!open)}
			>
				<Icon name="menu" />
			</button>

			<nav id="site-nav" aria-label="Main">
				<ul className="nav-links">
					{pages.map(({ id, label, href }) => (
						<li key={id}>
							<a href={href} aria-current={id === currentId ? 'page' : undefined}>{label}</a>
						</li>
					))}
				</ul>
			</nav>

			{/* Invisible, never-collapsed copy of the bar that useCompactBar measures */}
			<div className="topbar-ruler" aria-hidden="true">
				<span className="brand">{SITE_NAME}</span>
				<ul className="nav-links">
					{pages.map(({ id, label }) => (
						<li key={id}>
							<span className={`nav-ghost${id === currentId ? ' is-current' : ''}`}>{label}</span>
						</li>
					))}
				</ul>
			</div>
		</header>
	);
}

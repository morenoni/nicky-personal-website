// The navy top bar: site name, tab bar, and (when the tabs do not fit) a menu button.

import { useRef, useState } from 'react';
import Icon from './Icon.jsx';
import TabList from './TabList.jsx';
import useCompactBar from '../hooks/useCompactBar.js';
import { SITE_NAME } from '../site.js';
import './TopBar.css';

export default function TopBar({ tabs, activeId, onSelect }) {
	const barRef = useRef(null);
	const navRef = useRef(null);
	const toggleRef = useRef(null);
	const [menuOpen, setMenuOpen] = useState(false);

	const compact = useCompactBar(barRef);
	const open = compact && menuOpen;

	// Choosing a tab closes the menu. If focus was inside the menu, it moves to the menu
	// button so keyboard users do not lose their place when the list disappears.
	const handleSelect = id => {
		if (compact && navRef.current.contains(document.activeElement)) toggleRef.current.focus();
		setMenuOpen(false);
		onSelect(id);
	};

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
			<a className="brand" href="#about">{SITE_NAME}</a>

			<button
				ref={toggleRef}
				className="menu-toggle"
				type="button"
				aria-expanded={open}
				aria-controls="tabs"
				aria-label="Menu"
				onClick={() => setMenuOpen(!open)}
			>
				<Icon name="menu" />
			</button>

			<nav ref={navRef} aria-label="Main">
				<TabList
					tabs={tabs}
					activeId={activeId}
					orientation={compact ? 'vertical' : 'horizontal'}
					onSelect={handleSelect}
				/>
			</nav>

			{/* Invisible, never-collapsed copy of the bar that useCompactBar measures */}
			<div className="topbar-ruler" aria-hidden="true">
				<span className="brand">{SITE_NAME}</span>
				<div className="tabs">
					{tabs.map(({ id, label }) => (
						<span key={id} className={`tab-ghost${id === activeId ? ' is-active' : ''}`}>{label}</span>
					))}
				</div>
			</div>
		</header>
	);
}

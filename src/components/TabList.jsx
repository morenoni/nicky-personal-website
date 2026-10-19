// The row of tabs. Clicking (or Enter / Space) selects a tab. Arrow keys, Home and End move
// focus between tabs without selecting them, following the ARIA tabs pattern.

import { useRef, useState } from 'react';

// How far each arrow key moves focus
const ARROW_STEPS = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 };

export default function TabList({ tabs, activeId, orientation, onSelect }) {
	const tabRefs = useRef({});
	const [focusedId, setFocusedId] = useState(null);

	// Only one tab is in the Tab key order: the one being navigated, or else the selected one
	const stopId = focusedId ?? activeId;

	const select = id => {
		setFocusedId(null);
		onSelect(id);
	};

	const handleKeyDown = (event, index) => {
		let target;
		if (event.key in ARROW_STEPS) target = (index + ARROW_STEPS[event.key] + tabs.length) % tabs.length;
		else if (event.key === 'Home') target = 0;
		else if (event.key === 'End') target = tabs.length - 1;
		else return;

		event.preventDefault();
		setFocusedId(tabs[target].id);
		tabRefs.current[tabs[target].id].focus();
	};

	return (
		<div className="tabs" id="tabs" role="tablist" aria-label="Site sections" aria-orientation={orientation}>
			{tabs.map(({ id, label }, index) => (
				<button
					key={id}
					ref={node => { tabRefs.current[id] = node; }}
					type="button"
					role="tab"
					id={`tab-${id}`}
					aria-controls={id}
					aria-selected={id === activeId}
					tabIndex={id === stopId ? 0 : -1}
					onClick={() => select(id)}
					onKeyDown={event => handleKeyDown(event, index)}
				>
					{label}
				</button>
			))}
		</div>
	);
}

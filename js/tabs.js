// Tab switching. Clicking (or Enter / Space) selects a tab; arrow keys, Home and End
// move focus between tabs; a #hash in the URL (like #research) selects that tab.

import { isCompact, setMenu } from './menu.js';

const SITE_NAME = 'Nicole (Nicky) Moreno Gonzalez';

const tabList = document.querySelector('.tabs');
const tabs = Array.from(document.querySelectorAll('[role="tab"]'));
const panels = Array.from(document.querySelectorAll('[role="tabpanel"]'));

// Where each key moves focus, given the index of the focused tab
const FOCUS_KEYS = {
	ArrowRight: i => i + 1,
	ArrowDown:  i => i + 1,
	ArrowLeft:  i => i - 1,
	ArrowUp:    i => i - 1,
	Home:       () => 0,
	End:        () => tabs.length - 1,
};

function selectTab(tab) {
	const hadFocusInMenu = isCompact() && tabList.contains(document.activeElement);
	tabs.forEach(t => {
		const selected = t === tab;
		t.setAttribute('aria-selected', selected);
		t.tabIndex = selected ? 0 : -1;   // only the selected tab is in the Tab key order
	});
	panels.forEach(p => { p.hidden = p.id !== tab.getAttribute('aria-controls'); });
	document.title = `${tab.textContent} · ${SITE_NAME}`;
	history.replaceState(null, '', '#' + tab.getAttribute('aria-controls'));
	window.scrollTo(0, 0);
	// If the menu was open and held focus, hand focus to the menu button so it is not lost
	setMenu(false, { returnFocus: hadFocusInMenu });
}

// Moves keyboard focus to a tab (wrapping around) without selecting it
function focusTab(index) {
	const next = tabs[(index + tabs.length) % tabs.length];
	tabs.forEach(t => { t.tabIndex = -1; });
	next.tabIndex = 0;
	next.focus();
}

// The tab named by the URL hash, if any (other hashes, like the skip link's, are left alone)
const tabForHash = () => tabs.find(t => t.getAttribute('aria-controls') === location.hash.slice(1));

export function initTabs() {
	tabs.forEach((tab, i) => {
		tab.addEventListener('click', () => selectTab(tab));
		tab.addEventListener('keydown', e => {
			const move = FOCUS_KEYS[e.key];
			if (move) {
				e.preventDefault();
				focusTab(move(i));
			}
		});
	});

	window.addEventListener('hashchange', () => {
		const tab = tabForHash();
		if (tab) selectTab(tab);
	});

	selectTab(tabForHash() || tabs[0]);
}

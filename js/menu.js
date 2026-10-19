// Collapsible top bar: the tabs fold into a menu button whenever they do not fit on one line.

const topbar = document.querySelector('.topbar');
const brand = document.querySelector('.brand');
const tabList = document.querySelector('.tabs');
const menuToggle = document.querySelector('.menu-toggle');
const phone = window.matchMedia('(max-width: 760px)');

export const isCompact = () => topbar.classList.contains('compact');

// Opens or closes the menu. With returnFocus, focus goes back to the menu button
// so keyboard users do not lose their place when the list disappears.
export function setMenu(open, { returnFocus = false } = {}) {
	topbar.classList.toggle('menu-open', open);
	menuToggle.setAttribute('aria-expanded', open);
	if (!open && returnFocus) menuToggle.focus();
}

// Measures the full bar, and collapses it if the tabs wrapped or overflowed
// (always collapsed on phone-sized screens, where the layout is stacked anyway).
function updateTopbar() {
	topbar.classList.remove('compact');
	const wrapped = topbar.querySelector('nav').offsetTop > brand.offsetTop + 8;
	const tooWide = tabList.scrollWidth > tabList.clientWidth;
	const compact = phone.matches || wrapped || tooWide;
	topbar.classList.toggle('compact', compact);
	tabList.setAttribute('aria-orientation', compact ? 'vertical' : 'horizontal');
	if (!compact) setMenu(false);
}

export function initMenu() {
	menuToggle.addEventListener('click', () => setMenu(!topbar.classList.contains('menu-open')));

	// Escape closes the menu and returns focus to the menu button
	topbar.addEventListener('keydown', e => {
		if (e.key === 'Escape' && topbar.classList.contains('menu-open')) {
			setMenu(false, { returnFocus: true });
		}
	});

	new ResizeObserver(updateTopbar).observe(document.body);
	document.fonts.ready.then(updateTopbar);
	updateTopbar();
}

// One tab's content. Every panel stays on the page; only the active one is visible.
// It is focusable so keyboard users can scroll it, and it points back to its tab for screen readers.

export default function TabPanel({ id, active, children }) {
	return (
		<section className="panel" id={id} role="tabpanel" aria-labelledby={`tab-${id}`} tabIndex={0} hidden={!active}>
			{children}
		</section>
	);
}

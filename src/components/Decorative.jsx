// Wraps an emoji that is only decoration, so screen readers skip it.

export default function Decorative({ children }) {
	return <span aria-hidden="true">{children}</span>;
}

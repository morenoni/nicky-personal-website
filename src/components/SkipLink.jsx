// Lets keyboard users jump past the top bar. Hidden until it receives focus (see styles/base.css).

export default function SkipLink() {
	return <a className="skip-link" href="#main">Skip to main content</a>;
}

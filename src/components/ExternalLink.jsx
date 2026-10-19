// A link to another site. It opens in a new tab and says so to screen readers.
// `context` names what the link is about, for links whose visible text repeats ("Read the paper").

export default function ExternalLink({ href, className, context, children }) {
	return (
		<a className={className} href={href} target="_blank" rel="noopener noreferrer">
			{children}
			{context && <span className="sr-only">: {context}</span>}
			<span className="sr-only"> (opens in a new tab)</span>
		</a>
	);
}

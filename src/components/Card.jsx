// One card. It is used by the Research, Experience, Projects and Honors tabs.
// Every field except `title` is optional:
//   emoji    decorative icon shown before the title
//   title    card heading
//   meta     small line under the heading (role, venue, dates...)
//   formats  badges next to the meta line: ['paper'], ['poster'] or ['paper', 'poster']
//   summary  short description
//   link     { href, label } for a "Read the paper" / "View the code" link

import Decorative from './Decorative.jsx';
import ExternalLink from './ExternalLink.jsx';
import Badges from './Badges.jsx';
import './Card.css';

export default function Card({ emoji, title, meta, formats, summary, link }) {
	const metaLine = meta && <p className="meta">{meta}</p>;

	return (
		<article className="card">
			<h3>
				{emoji && <><Decorative>{emoji}</Decorative>{' '}</>}
				{title}
			</h3>
			{formats ? <div className="meta-row">{metaLine}<Badges formats={formats} /></div> : metaLine}
			{summary && <p>{summary}</p>}
			{link && <ExternalLink href={link.href} context={title}>{link.label}</ExternalLink>}
		</article>
	);
}

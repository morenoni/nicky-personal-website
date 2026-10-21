// One card. It is used by the Research, Experience, Projects and Honors tabs.
// Every field except `title` is optional:
//   title    card heading
//   meta     small line under the heading (role, venue, dates...)
//   formats  badges next to the meta line: ['paper'], ['poster'] or ['paper', 'poster']
//   summary  short description
//   links    [{ href, label }] shown side by side, left to right (see data/links.js)
//   status   plain text shown where the links go, for work with nothing to link to yet ("In Progress...")

import ExternalLink from './ExternalLink.jsx';
import Badges from './Badges.jsx';
import './Card.css';

export default function Card({ title, meta, formats, summary, links, status }) {
	const metaLine = meta && <p className="meta">{meta}</p>;

	return (
		<article className="card">
			<h3>{title}</h3>
			{formats ? <div className="meta-row">{metaLine}<Badges formats={formats} /></div> : metaLine}
			{summary && <p>{summary}</p>}
			{links && (
				<div className="card-links">
					{links.map(({ href, label }) => (
						<ExternalLink key={label} href={href} context={title}>{label}</ExternalLink>
					))}
				</div>
			)}
			{status && <p className="card-status">{status}</p>}
		</article>
	);
}

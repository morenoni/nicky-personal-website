// The Email / LinkedIn / GitHub buttons, built from data/contact.js.

import Icon from '../../components/Icon.jsx';
import ExternalLink from '../../components/ExternalLink.jsx';
import { CONTACT } from '../../data/contact.js';

export default function ContactLinks() {
	return (
		<p className="links">
			{CONTACT.map(({ label, href, icon, external, hiddenSuffix }) => {
				const content = (
					<>
						<Icon name={icon} />
						{label}
						{hiddenSuffix && <span className="sr-only">{hiddenSuffix}</span>}
					</>
				);
				return external
					? <ExternalLink key={label} className="pill" href={href}>{content}</ExternalLink>
					: <a key={label} className="pill" href={href}>{content}</a>;
			})}
		</p>
	);
}

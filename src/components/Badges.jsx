// The small "Paper" and "Poster" badges on a card, announced as a list called "Formats".

import Icon from './Icon.jsx';
import './Badges.css';

const FORMATS = [
	{ icon: 'paper', label: 'Paper' },
	{ icon: 'poster', label: 'Poster' },
];

export default function Badges() {
	return (
		<ul className="badges" aria-label="Formats">
			{FORMATS.map(({ icon, label }) => (
				<li key={label} className="badge">
					<Icon name={icon} />
					{label}
				</li>
			))}
		</ul>
	);
}

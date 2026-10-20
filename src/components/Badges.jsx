// The small "Paper" and "Poster" badges on a card, announced as a list called "Formats".
// `formats` names which badges to show, for example ['poster'] or ['paper', 'poster'].

import Icon from './Icon.jsx';
import './Badges.css';

const FORMATS = {
	paper: { icon: 'paper', label: 'Paper' },
	poster: { icon: 'poster', label: 'Poster' },
};

export default function Badges({ formats }) {
	return (
		<ul className="badges" aria-label="Formats">
			{formats.map(key => (
				<li key={key} className="badge">
					<Icon name={FORMATS[key].icon} />
					{FORMATS[key].label}
				</li>
			))}
		</ul>
	);
}

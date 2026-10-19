// The shared layout of a tab made of cards: a heading, an optional intro sentence, and the cards.

import Card from '../components/Card.jsx';

export default function CardsPanel({ title, lead, items }) {
	return (
		<>
			<h2>{title}</h2>
			{lead && <p className="lead">{lead}</p>}
			<div className="cards">
				{items.map(item => <Card key={item.title} {...item} />)}
			</div>
		</>
	);
}

// The Honors & Awards tab: awards from data/honors.js.

import CardsPanel from './CardsPanel.jsx';
import { HONORS } from '../data/honors.js';

export default function Honors() {
	return <CardsPanel title="Honors & Awards" items={HONORS} />;
}

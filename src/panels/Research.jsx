// The Research tab: papers from data/research.js.

import CardsPanel from './CardsPanel.jsx';
import { RESEARCH } from '../data/research.js';

const LEAD = 'I work on making programming tools and learning experiences accessible from the start, '
	+ 'especially for blind, low-vision, and neurodiverse students. '
	+ 'Three papers from the Glimmer Lab appeared at SIGCSE TS 2026.';

export default function Research() {
	return <CardsPanel title="Research" lead={LEAD} items={RESEARCH} />;
}

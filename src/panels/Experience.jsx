// The Experience page: jobs from data/experience.js, newest end date first.

import CardsPanel from './CardsPanel.jsx';
import { EXPERIENCE } from '../data/experience.js';

export default function Experience() {
	return <CardsPanel title="Experience" items={EXPERIENCE} />;
}

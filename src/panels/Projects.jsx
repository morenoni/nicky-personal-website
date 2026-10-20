// The Projects page: projects from data/projects.js.

import CardsPanel from './CardsPanel.jsx';
import { PROJECTS } from '../data/projects.js';

export default function Projects() {
	return <CardsPanel title="Projects" items={PROJECTS} />;
}

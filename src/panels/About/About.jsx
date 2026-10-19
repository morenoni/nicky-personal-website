// The About tab: photo beside the bio.

import Bio from './Bio.jsx';
import portrait from '../../assets/portrait.jpg';
import './About.css';

export default function About() {
	return (
		<div className="about-grid">
			<img
				className="portrait"
				src={portrait}
				width="656"
				height="720"
				alt="Nicky smiling in front of her research poster, Enhancing Accessibility of a Web-based Scheme IDE to Improve Inclusion in Computing, at a conference."
			/>
			<Bio />
		</div>
	);
}

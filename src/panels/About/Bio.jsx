// The greeting, the bio text, and the contact buttons.

import Decorative from '../../components/Decorative.jsx';
import ContactLinks from './ContactLinks.jsx';

export default function Bio() {
	return (
		<div className="bio">
			<h2 className="greeting">Hi, I'm Nicky! <Decorative>👋</Decorative></h2>
			<p>
				I'm a senior at <strong>Grinnell College</strong> majoring in Computer Science with a minor in
				Statistics. I'm originally from Nicaragua <Decorative>🇳🇮</Decorative>. My research has been
				supported by Grinnell's Computer Science Department and the{' '}
				<strong>Association for Computing Machinery (ACM)</strong>.
			</p>
			<p>
				My research interests lie at the intersection of <strong>Human-Computer Interaction (HCI)</strong>,{' '}
				<strong>Artificial Intelligence (AI)</strong>, <strong>Accessibility</strong>, and{' '}
				<strong>Computer Science Education</strong>. Through developing tools to automate processes and
				creating accessible educational experiences, I've found joy in designing straightforward,
				user-friendly solutions that accommodate users with different needs.
			</p>
			<p>
				I'm currently exploring graduate programs that align with my research interests and long-term
				goals. Let's connect if we share similar interests or if you're interested in potential
				collaborations! :)
			</p>
			<ContactLinks />
		</div>
	);
}

// The News box: a fixed-height box that scrolls, with cues that more is hidden.
// The items come from data/news.js. The scroll area is a focusable, labeled region
// so keyboard users can reach and scroll it.

import { useRef } from 'react';
import useScrollHint from '../../hooks/useScrollHint.js';
import { NEWS } from '../../data/news.js';
import './News.css';

export default function News() {
	const scrollRef = useRef(null);
	const hasMore = useScrollHint(scrollRef);

	return (
		<div className={`news${hasMore ? ' has-more' : ''}`}>
			<div className="news-head">
				<h2 id="news-title">News</h2>
				{/* Sighted users only: screen readers already read the whole list */}
				<p className="news-hint" aria-hidden="true">Scroll for more &darr;</p>
			</div>
			<div className="news-scroll" ref={scrollRef} role="region" aria-labelledby="news-title" tabIndex={0}>
				<ul>
					{NEWS.map(({ date, label, text }) => (
						<li key={date}>
							<time className="date" dateTime={date}>{label}</time>
							<span>{text}</span>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

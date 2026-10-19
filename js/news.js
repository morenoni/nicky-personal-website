// The News box on the About tab: fills the list from data/news.js, and shows a
// "Scroll for more" hint while older items are hidden below.

import { el, decorative } from './dom.js';

export function renderNews(items) {
	const list = document.getElementById('news-list');
	list.replaceChildren(...items.map(({ date, label, emoji, text }) =>
		el('li', {},
			el('time', { class: 'date', datetime: date }, label),
			el('span', {}, decorative(emoji), ` ${text}`))));
}

// Adds .has-more to the News box whenever there is more to scroll to
export function watchNewsScroll() {
	const news = document.querySelector('.news');
	const scroller = document.querySelector('.news-scroll');
	const update = () => {
		const hiddenBelow = scroller.scrollHeight - scroller.clientHeight - scroller.scrollTop > 4;
		news.classList.toggle('has-more', hiddenBelow);
	};
	scroller.addEventListener('scroll', update);
	new ResizeObserver(update).observe(scroller);
	update();
}

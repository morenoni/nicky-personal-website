// Entry point: fills the page from the data files, then turns on the site's behavior.

import { NEWS } from './data/news.js';
import { RESEARCH } from './data/research.js';
import { EXPERIENCE } from './data/experience.js';
import { PROJECTS } from './data/projects.js';
import { HONORS } from './data/honors.js';
import { renderNews, watchNewsScroll } from './news.js';
import { renderCards } from './cards.js';
import { decorateExternalLinks } from './links.js';
import { initMenu } from './menu.js';
import { initTabs } from './tabs.js';

// Each <div data-cards="name"> in index.html is filled with the matching list
const CARD_LISTS = {
	research: RESEARCH,
	experience: EXPERIENCE,
	projects: PROJECTS,
	honors: HONORS,
};

renderNews(NEWS);
document.querySelectorAll('[data-cards]').forEach(container =>
	renderCards(container, CARD_LISTS[container.dataset.cards]));
decorateExternalLinks();

initMenu();
initTabs();
watchNewsScroll();

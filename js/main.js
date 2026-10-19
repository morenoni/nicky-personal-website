// Entry point: fills the page from the data files, then turns on the site's behavior.

import { NEWS } from './data/news.js';
import { renderNews, watchNewsScroll } from './news.js';
import { initMenu } from './menu.js';
import { initTabs } from './tabs.js';

renderNews(NEWS);

initMenu();
initTabs();
watchNewsScroll();

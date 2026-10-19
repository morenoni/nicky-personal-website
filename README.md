# Personal website

The personal website of Nicole (Nicky) Moreno Gonzalez: a tabbed, navy-blue portfolio built with plain HTML, CSS and JavaScript. There is no build step and no dependencies.

## Run it locally

The scripts are ES modules, so the page has to be served over HTTP (opening `index.html` by double-clicking will not work):

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000.

## How the code is organized

```
index.html          Page structure: top bar, tabs, About and Education text
css/                One small stylesheet per component
  theme.css           Colors and sizes (change the look of the site here)
  base.css            Typography, focus rings, accessibility helpers
  topbar.css          Site name bar
  tabs.css            Tab bar and the collapsed menu button
  panels.css          Tab panels and page margins
  about.css           Photo, bio and contact buttons
  education.css       Education box
  news.css            Scrollable news box
  cards.css           Cards used by Research, Experience, Projects and Honors
  badges.css          Paper and Poster badges
  contrast.css        Windows High Contrast support
js/                 One small module per behavior
  main.js             Entry point: renders the content, then turns on behavior
  dom.js              Helpers for building elements and icons
  menu.js             Collapses the tab bar into a menu when it does not fit
  tabs.js             Tab switching and keyboard support
  news.js             Renders the news list and the "Scroll for more" hint
  cards.js            Renders every card list (and the Paper / Poster badges)
  links.js            Opens outside links in a new tab
  data/               The content itself (see below)
images/             Photos
```

## Updating the content

Most content lives in small data files in `js/data/`. Edit one, save, and refresh.

| To change | Edit |
| --- | --- |
| News | `js/data/news.js` (add new items at the top) |
| Research papers | `js/data/research.js` |
| Experience | `js/data/experience.js` (newest end date first) |
| Projects | `js/data/projects.js` |
| Honors and awards | `js/data/honors.js` |
| Bio, Education, contact links | `index.html` |
| Colors | `css/theme.css` |

## Accessibility

The site aims for WCAG 2.2 AA. Keep these when making changes:

- Use real links and buttons; add ARIA only where HTML cannot express the meaning.
- Tabs follow the ARIA tabs pattern (arrow keys, Home and End move focus; Enter or Space selects).
- Decorative emoji and icons are hidden from screen readers.
- Links that open a new tab say so for screen readers, and repeated link text includes the item it belongs to.
- Keep text contrast at 4.5:1 or better and keep visible focus rings.

## Publishing with GitHub Pages

1. Create an empty repository on GitHub (a repository named `<username>.github.io` is served at `https://<username>.github.io`).
2. Connect it and push:
   ```bash
   git remote add origin https://github.com/<username>/<repository>.git
   git push -u origin main
   ```
3. On GitHub open Settings, then Pages, and choose "Deploy from a branch", branch `main`, folder `/ (root)`.

After that, every `git push` to `main` updates the live site within a minute or two.

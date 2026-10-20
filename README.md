# Personal website

My personal website: who I am, my research, experience, projects, and honors. I'm Nicky, a Computer Science student at Grinnell College interested in HCI, AI, accessibility, and CS education.

## What it is

A single-page site with tabs (About, Research, Experience, Projects, Honors) in a navy blue theme. It's built with React and Vite, and published with GitHub Pages.

## Accessibility

Since accessibility is my research area, I built the site to follow WCAG 2.2 AA:

- Fully usable with a keyboard, including the tabs and the mobile menu
- Labeled for screen readers, with decorative icons and emoji hidden from them
- A skip link, visible focus rings, and strong color contrast
- Works down to very small phone screens, and in Windows High Contrast mode

## Running it locally

```bash
npm install
npm run dev
```

Then open the address Vite prints (http://localhost:5173). `npm run build` makes the production version in `dist/`.

## Layout

- `src/components/`: small reusable pieces (top bar, tabs, cards, icons)
- `src/panels/`: the content of each tab
- `src/data/`: the text content (news, papers, jobs, projects, awards)
- `src/hooks/`: the logic for the collapsing menu, tab selection, and the news scroll hint
- `src/styles/`: the theme and page-wide styles

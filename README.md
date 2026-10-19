# Personal website

My personal website: who I am, my research, experience, projects, and honors. I'm Nicky, a Computer Science student at Grinnell College interested in HCI, AI, accessibility, and CS education.

## What it is

A single-page site with tabs (About, Research, Experience, Projects, Honors) in a navy blue theme. It's built with plain HTML, CSS, and JavaScript, with no frameworks and no build step.

## Accessibility

Since accessibility is my research area, I built the site to follow WCAG 2.2 AA:

- Fully usable with a keyboard, including the tabs and the mobile menu
- Labeled for screen readers, with decorative icons and emoji hidden from them
- A skip link, visible focus rings, and strong color contrast
- Works down to very small phone screens, and in Windows High Contrast mode

## Running it locally

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000. It needs a local server because the scripts are ES modules.

## Layout

- `index.html`: page structure and the About text
- `css/`: one small stylesheet per part of the page
- `js/`: one small module per behavior, with the page content in `js/data/`
- `images/`: photos

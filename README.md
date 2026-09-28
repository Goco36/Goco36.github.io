# goco36.github.io

Source code of my personal portfolio: **https://goco36.github.io**

A single static page built with plain HTML, CSS and JavaScript, with no frameworks or build step, and hosted on GitHub Pages.

## Structure

```
index.html   # content and page structure
styles.css   # layout, dark theme, animations and responsive rules
script.js    # scroll reveal, footer year and "copy email" button
```

## Design decisions

- **No frameworks or build step:** plain HTML, CSS and JavaScript. The only external request is Google Fonts (IBM Plex Sans, IBM Plex Mono and Instrument Serif).
- **Animations in CSS:** staggered entrance, a terminal that "types" a real command from my [security-headers-checker](https://github.com/Goco36/security-headers-checker) project, a technology marquee and hover effects. JavaScript is only used to reveal sections on scroll (`IntersectionObserver`).
- **Accessible by default:** semantic HTML, skip link, visible keyboard focus, sufficient colour contrast, and all animations disabled when the visitor has "reduce motion" turned on. Content stays visible if JavaScript is disabled.
- **Responsive:** two-column layout on desktop, single column on tablets and phones.

## Run locally

```bash
python -m http.server 8000
```

Then open http://localhost:8000.

## License

MIT

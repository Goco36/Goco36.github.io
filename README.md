# goco36.github.io

Source code of my personal portfolio: **https://goco36.github.io**

A single static page built with plain HTML, CSS and JavaScript, with no frameworks or build step, and hosted on GitHub Pages.

## Structure

```
index.html   # content and page structure
styles.css   # layout, dark theme and responsive rules
script.js    # footer year and "copy email" button
```

## Design decisions

- **No dependencies:** system fonts and no external libraries, so the page loads fast and makes no third-party requests.
- **Accessible by default:** semantic HTML, skip link, visible keyboard focus, sufficient colour contrast and support for reduced-motion preferences.
- **Responsive:** single-column layout on small screens.

## Run locally

```bash
python -m http.server 8000
```

Then open http://localhost:8000.

## License

MIT

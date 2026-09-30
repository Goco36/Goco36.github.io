# goco36.github.io

Source code of my personal portfolio: **https://goco36.github.io**

A single static page built with plain HTML, CSS and JavaScript, with no frameworks or build step, and hosted on GitHub Pages.

## Structure

```
index.html   # content and layout (bento grid)
styles.css   # dark theme, animations and responsive rules
script.js    # "copy email" button
```

## Design decisions

- **Bento grid:** content is organised as tiles of different sizes, grouped into Projects, Certificates and Contact.
- **No frameworks or build step:** plain HTML, CSS and JavaScript. The only external request is Google Fonts (Bricolage Grotesque and Geist Mono).
- **Accessible:** skip link, visible keyboard focus, and all animations disabled when the visitor has "reduce motion" turned on.
- **Responsive:** four columns on desktop, two on tablets and one on phones.

## Run locally

```bash
python -m http.server 8000
```

Then open http://localhost:8000.

## License

MIT

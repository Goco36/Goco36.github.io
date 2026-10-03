# goco36.github.io

My portfolio, written as a logbook: https://goco36.github.io

Plain HTML, CSS and a little JavaScript. No framework, no build step, hosted on GitHub Pages.

## Structure

```
index.html            # home: intro, index of projects and courses, contact
projects/gg-01.html   # one page per project
css/styles.css        # the whole design system (tokens at the top)
js/main.js            # index filters and margin-note highlighting
favicon.svg
```

## Adding a project

1. Copy `projects/gg-01.html` to `projects/gg-02.html` and replace the content.
2. Add a row to the table in `index.html` with `data-tags` (`project`, `security`, `course`...).
   The filter counts update on their own.

## Run locally

```bash
python -m http.server 8000
```

# Abide Labs marketing website

Static HTML, CSS, and JavaScript. No runtime packages or application credentials are required.

Regenerate the marketing pages with Python 3:

```sh
python3 tools/build.py
```

The page copy and shared HTML templates live in `tools/build.py`. Styles and interactions are in `assets/site.css` and `assets/site.js`. Product policy text remains in the existing HTML documents.

The original brand film remains `assets/hero.mp4`. Desktop/mobile delivery files and the still poster are derivatives of that film. Brand image derivatives trim transparent margins from the existing artwork.

The founder approved this website and its project descriptions for production on November 24, 2026. Marketing pages allow indexing; the not-found page remains noindex. GitHub Pages publishes the `main` branch at the repository root. Future preview deployments must add their own indexing safeguard without changing production directives.

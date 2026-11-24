# Abide Labs marketing website

Static HTML, CSS, and JavaScript. No runtime packages or application credentials are required.

Regenerate the marketing pages with Python 3:

```sh
python3 tools/build.py
```

The page copy and shared HTML templates live in `tools/build.py`. Styles and interactions are in `assets/site.css` and `assets/site.js`. Product policy text remains in the existing HTML documents.

The original brand film remains `assets/hero.mp4`. Desktop/mobile delivery files and the still poster are derivatives of that film. Brand image derivatives trim transparent margins from the existing artwork.

This branch is a founder-review preview. Generated pages contain `noindex,follow`; `vercel.json` also sets a preview noindex header. Production release requires explicit founder approval, removal of both preview indexing safeguards, and a release verification pass. Do not publish this branch to the GitHub Pages production branch as part of preview work.

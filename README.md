# Words On Words! website

Plain static site: `index.html`, `styles.css`, `script.js`, and an `images/` folder. No build step. Open `index.html` in a browser to preview.

## Images
The page uses the official App Store screenshots and icon. It looks for them in `images/` first
(`screenshot-1.png` … `screenshot-5.png`, `icon.jpg`, in App Store order) and falls back to Apple's
copies if they're missing. To save local copies, run `sh get-app-store-images.sh` in this folder.

## Colours
All colours are CSS variables at the top of `styles.css`.

## Hosting
Hosted on GitHub Pages from the `main` branch of this repository. Pushing to `main` republishes the site.
The privacy policy link points to the existing page at dontlookdown-6ec26.web.app.

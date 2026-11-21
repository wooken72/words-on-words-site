# dontlookdown.ca

Plain static site, no build step. Open any `index.html` in a browser to preview.

- `index.html`: the Don't Look Down landing page, listing both games. `images/` holds their icons.
- `words-on-words/`: the Words On Words! page (`index.html`, `styles.css`, `script.js`) and its privacy policy
  (`privacy.html`).
- `corked/`: the Corked: Message in a Bottle page and its privacy policy, in the game's sea-chart style. Its fonts
  (Germania One, Patrick Hand; SIL Open Font License) are in `corked/fonts/`. The source for these pages is the
  `site/` folder of the MessageInABottle project.

## Words On Words! images
The page uses the official App Store screenshots and icon. It looks for them in `words-on-words/images/` first
(`screenshot-1.png` … `screenshot-5.png`, `icon.jpg`, in App Store order) and falls back to Apple's copies if
they're missing. To save local copies, run `sh words-on-words/get-app-store-images.sh`.

## Colours
Each page's colours are CSS variables at the top of its stylesheet (the landing page's are in its `<style>`).

## Hosting
Hosted on GitHub Pages from the `main` branch of this repository. Pushing to `main` republishes the site.
`privacy.html` at the top only redirects to `words-on-words/privacy.html`, so the policy's old address keeps working.

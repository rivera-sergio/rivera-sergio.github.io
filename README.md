# Sergio A. Rivera — personal/research site

A plain HTML/CSS site (no build step, no Jekyll) — five pages: Home, Research,
Policy & Consulting, Teaching, CV. Works on GitHub Pages as-is.

## 1. Get it into your GitHub account (github.com/cardenalion)

You do **not** need git or the command line for any of this — everything
below can be done in the browser.

1. Go to github.com, click **+** (top right) → **New repository**.
2. Name it **exactly** `cardenalion.github.io` (this exact name is what makes
   GitHub host it automatically). If you already have a repo with that name,
   just open it instead.
3. Inside the repo, click **Add file → Upload files**.
4. Drag in every file and folder from this package (`index.html`,
   `research.html`, `consulting.html`, `teaching.html`, `cv.html`, the `css/`
   folder, the `images/` folder, and the `files/` folder), keeping the same
   folder structure. GitHub preserves folders when you drag them in.
5. Scroll down, click **Commit changes**.
6. Go to **Settings → Pages** in the repo. Under "Build and deployment,"
   confirm the source is the `main` (or `master`) branch, root folder. Save.
7. Within a minute or two your site is live at:
   `https://cardenalion.github.io`

## 2. Replace the placeholder images

The site currently uses generated placeholder graphics so nothing looks
broken. Replace them with real photos, keeping the same filenames so you
don't have to edit any HTML:

- `images/profile.jpg` — your headshot (square or portrait works best;
  roughly 600×720px or similar aspect ratio).
- `images/dc-banner.jpg` — your Washington, D.C. postcard-style photo (wide;
  roughly 1920×640px or similar — a wide crop of the Mall, Capitol, or
  skyline works well as a letterbox banner).
- `images/paper-published.jpg`, `images/paper-workingpaper.jpg`,
  `images/paper-jmp.jpg` — one representative figure/chart from each paper.

To replace: open the file in your repo on github.com, click the trash icon
or just re-drag a new file with the same name into **Add file → Upload
files** — GitHub will offer to overwrite it.

## 3. Fill in the placeholder text

Search each page for the pink "Placeholder" notes (`<span class="editable-note">`)
— these mark everything that still needs your input:

- **research.html**: job market paper title/abstract (once ready), the real
  published abstract for the 2022 *Journal of Policy Modeling* paper, and
  the working paper abstract/status.
- **cv.html**: confirm the M.Sc. institution, and decide whether you're
  comfortable listing your references' emails publicly (phone numbers were
  deliberately left off — see the note on that page).
- **index.html**: add your real Google Scholar and LinkedIn URLs in the
  `link-row`, and update the "Updates" section with real news as it happens.

Edit any of these directly in the browser: open the file on github.com,
click the pencil (✏️) icon, edit the text, then click **Commit changes** at
the bottom. The live site rebuilds automatically within about a minute.
No local git needed for text or image edits — this is the workflow you'll
use for all ordinary updates going forward.

## 4. Add your CV as a downloadable PDF

The "Download CV" buttons point to `files/Sergio_Rivera_CV.pdf`. Export your
`.tex` file to PDF (Overleaf is the easiest way if you don't have the
`resume_cardenalion.cls` file set up locally: upload the .tex there and use
Menu → Download PDF), then upload it into the `files/` folder with exactly
that filename, replacing `PUT_YOUR_CV_PDF_HERE.txt`.

## 5. Optional: custom domain later

You can start with the free `cardenalion.github.io` address and add a
custom domain (e.g. `sergiorivera.com`) whenever you're ready, with no
rebuild required:

1. Buy the domain (Namecheap, Porkbun, etc., roughly $10–20/year).
2. In your repo, add a file named `CNAME` (no extension) containing just
   your domain name, e.g. `sergiorivera.com`.
3. At your registrar, add a `CNAME` record for `www` pointing to
   `cardenalion.github.io`, and four `A` records for the root domain
   pointing to GitHub's IPs (listed in GitHub's own Pages + custom domain
   documentation — search "GitHub Pages custom domain A records" for the
   current list).
4. Wait a few hours for DNS to propagate, then check the box for "Enforce
   HTTPS" in Settings → Pages once it's available.

## File structure

```
index.html          Home page
research.html        Research (job market paper / publications / working papers)
consulting.html       Policy & Consulting
teaching.html        Teaching
cv.html              Full CV, with a PDF download button
css/style.css         All styling
images/              Photos (currently placeholders — see step 2)
files/               CV PDF goes here (see step 4)
```

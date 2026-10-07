# Instructions for the site owner (private — do NOT upload this file)

Everything the public should not see lives here. The website itself contains no notes,
only polished content and "loading…" placeholders where something is not available yet.

GitHub account: https://github.com/rivera-sergio  ·  Repo name to use: `rivera-sergio.github.io`
Live address: https://rivera-sergio.github.io

---

## 1. First upload (browser only, no git needed)

1. github.com → **+** → **New repository** → name it exactly `rivera-sergio.github.io`, set Public.
2. Unzip `sergio-rivera-website.zip`. Open the inner `sergio-site` folder.
3. In the new repo choose **Add file → Upload files** and drag in the *contents* of `sergio-site`:
   `index.html`, `research.html`, `consulting.html`, `teaching.html`, `cv.html`,
   and the `css/`, `js/`, `images/` folders. (Not this instructions file.)
4. **Commit changes**. Then **Settings → Pages**: source = `main` branch, root folder. Save.
5. After 1–2 minutes the site is live at https://rivera-sergio.github.io

## 2. What shows "loading…" today and how to fill it

| Where | What is missing | How to fill it |
|---|---|---|
| Home, CV page | CV download button | Export your `.tex` to PDF (Overleaf: Menu → Download PDF). Upload it to the repo root named exactly `Sergio_Rivera_CV.pdf`. The button turns into a live link on its own. |
| Home | Google Scholar, LinkedIn | Open `js/site-links.js` on GitHub (pencil icon), paste your URLs between the quotes for `scholar` and `linkedin`, commit. The chips become links automatically. |
| Research | Published-version link, replication code, working-paper PDF/code | Same file, `js/site-links.js`: keys `pub-published` (journal/DOI URL), `pub-code`, `wp-paper`, `wp-code`. `pub-wp` is already filled with the Banco de la República working-paper link from your LaTeX comments (Borradores de Economía No. 1107) — check it is the version you want to show. |
| Research | Abstracts (published paper, thesis) | In `research.html`, replace the block `<div class="loading-inline" ...> ... </div>` with:<br>`<p class="paper-abstract">Your abstract text.</p>` |
| Research | Figures beside abstracts | Replace `images/paper-published.jpg` and `images/paper-workingpaper.jpg` (and `images/paper-jmp.jpg` when you add the job market paper) with real figures. Keep the same filenames; use **Add file → Upload files** and confirm overwrite. Landscape 4:3, about 800×600 px works best. |
| Research | Job market paper | Replace the whole `<div class="loading-card"> ... </div>` under "Job Market Paper" with a copy of the published-paper card (`<div class="paper-card"> ... </div>`), changing the tag to "Job Market Paper", the title, and the image to `images/paper-jmp.jpg`. |
| Research | Work in progress | Replace the loading card with a normal `<ul><li>Project title — one-line description</li></ul>`. |
| Policy & Consulting | Policy briefs | Replace the loading card with `<ul><li><a href="...">Brief title</a></li></ul>` when you have non-technical summaries to share. |
| Teaching | Syllabi and materials | Replace the loading card with `<ul><li><a href="syllabus.pdf">ECON470 Labor Economics — syllabus</a></li></ul>` and upload the PDFs to the repo. |
| Home | News | Replace the loading card with a dated list, e.g. `<ul><li><strong>Sep 2026</strong> — Presented at ...</li></ul>`. |
| Everywhere | Profile photo and Washington, D.C. banner | Replace `images/profile.jpg` (portrait, about 600×720 px) and `images/dc-banner.jpg` (wide, about 1920×640 px; keep the subject in the lower-middle of the frame since the top is darkened for contrast). Same filenames, no HTML edits. |

To edit any file after it is live: open it on github.com → pencil icon → edit → **Commit changes**.
The site rebuilds in about a minute.

## 3. Things I was not sure about (please verify; wording on the site is my best reading of your CV)

- **"Senior GA" (2026–present, Smith School of Business)** appears as "Senior Graduate Assistant".
- **World Bank Gender Group (2019–2021)**: the CV gives no job title, so the site shows only the group name.
- **"Consultant STC"** appears as "Short-Term Consultant (STC)".
- **M.Sc. 2016–2018**: shown as Universidad del Rosario, supported by your "2019 Master Thesis magna cum laude — Universidad del Rosario" distinction line.
- **Master in Economics (2025, UMD)**: shown as "Master in Economics" exactly as in the CV.
- **Teaching**: the CV does not give a date or institution for Macroeconomics II, and gives no institution for Microeconomics II (2017) or Advanced Impact Evaluation (the commented-out coursework lines suggest Rosario / Rosario Summer School). The site leaves those institutions off rather than guess.
- **Thesis paper**: the title and "Master's thesis, Universidad del Rosario, 2019" come from a commented-out line in your LaTeX. Confirm that is how you want it described.
- **Home-page "Focus areas" wording** (heterogeneous-firm general equilibrium, misallocation) is carried over from the earlier blueprint, not from the CV. Edit `index.html` if it does not match your agenda.

## 4. Privacy choices made on your behalf

- Your personal phone number and home-type addresses are **not** on the site. Only `river@umd.edu` and the GitHub link are.
- References appear by name and affiliation only, with "Contact details available upon request." Your CV had their emails and phone numbers; I left them off so nobody is published without consent. To add an email back, edit the `reference-card` blocks in `cv.html`.

## 5. Keeping notes private

- Do not put drafts, TODOs or comments inside the HTML files — anyone can use "View source" in a browser and read HTML comments. Keep notes in this file or in Notion instead.
- A public repo exposes every file in it. Never upload this file or private drafts.

## 6. Optional: custom domain later (about $10–20/year)

1. Buy the domain (Namecheap, Porkbun, …).
2. In the repo, add a file named `CNAME` containing only your domain (e.g. `sergiorivera.com`).
3. At the registrar add a `CNAME` record for `www` → `rivera-sergio.github.io`, plus the `A` records for the root domain listed in GitHub's "Configuring an apex domain" docs.
4. Wait a few hours, then tick **Enforce HTTPS** in Settings → Pages.

## 7. Files in the site

```
index.html, research.html, consulting.html, teaching.html, cv.html
css/style.css          all styling (including the loading cards)
js/site-links.js       the only file you edit to fill in external links
js/site.js             turns "loading…" chips into links once a URL / the CV PDF exists
images/                profile.jpg, dc-banner.jpg, paper-*.jpg (currently "loading…" images)
```

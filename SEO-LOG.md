# SEO log: dconsult.in

A record of the website's SEO when we took over the project, and every change made since.

Starting point: repo `dconsultwebserver/dconsult-project`, commit `c024433`. Website code is in `web/`.
Confirmed on 2026-11-02 that this is the code running on dconsult.in (same homepage title, same pages).

---

## Starting state (2026-11-02)

Checked in the code and on the live site:

| Area | State when we started |
|---|---|
| Pages pointing to another website | 7 pages give `http://cosmotradelive.in/...` as their real address (canonical), because `web/.env` has `NEXT_PUBLIC_URL = 'http://cosmotradelive.in/'`: About, Contact, Bill Discounting, Demat Account, Dubai Property, Private Equity, Fund Raising |
| Blocked pages | The same 7 pages tell Google not to list them (`noindex`) |
| Pages copying the homepage | 13 pages have no title, description or canonical of their own. They use the homepage's, so Google treats them as copies of the homepage: Unlisted Stocks, NSE, NCDEX, MSEI, OYO, Polymatech, Privacy, Cookies, Disclaimers, Terms, Thank You, Dubai news and property detail |
| Pages done right | 3: Acquisition Debt, Machinery Loans, ECB (own title, description and canonical) |
| Homepage title | "Machinery Loans Mumbai \| Acquisition Finance & ECB Mumbai - Dhumavati Consulting LLP" |
| Descriptions | 7 pages use placeholder text from Sanity, e.g. "Siddjivinayak About Page build by pixel design", "siddhi-fund-Rising" |
| Leftover template code | Page settings point to nextjs.org (language links, Twitter card, images) |
| Sitemap | Broken on the live site (404): the file is named `sitemap .xml` (with a space). It also lists only 10 pages without trailing slashes, and leaves out all unlisted-stock pages |
| robots.txt | Fine: allows normal search engines and points to the sitemap |
| www vs non-www | `https://www.dconsult.in/` shows the site instead of redirecting, so Google sees two copies of the site. (http → https redirect works.) |
| `.htaccess` | Saved as `htaccess` (no dot), so its rules don't run |
| Hidden links | Shared layout has hidden links (`display: none`), which Google can treat as a trick |
| Google Search Console tag | Present |
| Google Analytics | Present (`G-TX8B62P94Y`) |
| Main headings (`h1`) | Homepage has 3; most service pages have 2; Privacy, Cookies, Disclaimers, Terms and Fund Raising have none |
| Image alt text | Homepage images mostly say `alt="image"`, which tells Google nothing |
| Structured data (schema) | None (no business name, address or phone for Google) |
| Social share image | None (`og:image` missing) |
| Homepage video | 9 MB, slows the page |
| Old leftover file | `web/public/index.txt` is a stale build file |
| Dubai detail pages | Property and news detail pages load content from browser storage, so they are empty when opened from a Google link |
| Secret leaks | None in the code or git history. EmailJS key, Formspree IDs and Sanity project ID are public by design |

---

## Changes

### 2026-11-02: Fix #1, 7 pages pointing to another website and blocked from Google

Pages: About, Contact, Bill Discounting, Demat Account, Dubai Property, Private Equity, Fund Raising.

- Their real address (canonical) now points to dconsult.in instead of `cosmotradelive.in`, e.g. `https://dconsult.in/aboutUs/`.
- Removed `noindex`, so Google can list them.
- New titles in the same style as the existing good pages, e.g. "Private Equity Mumbai - Dhumavati Consulting LLP".
- Replaced the placeholder descriptions (e.g. "siddhi-fund-Rising") with real ones.
- Removed the leftover nextjs.org settings.
- Changed `web/.env` `NEXT_PUBLIC_URL` from `http://cosmotradelive.in/` to `https://dconsult.in/`.

Checked: build passes, and no built page contains `cosmotradelive`, `noindex` or nextjs.org.

Files: the 7 pages' `page.js`, `web/.env`.

### 2026-11-03: Fix #2, 13 pages copying the homepage

Pages: Unlisted Stocks, NSE, NCDEX, MSEI, OYO, Polymatech, Privacy, Cookies, Disclaimers, Terms, Thank You, Dubai news, Dubai property.

- Each now has its own title, description and canonical (new `layout.js` in each folder, since these pages run in the browser and can't hold settings themselves).
- Thank You page set to stay out of Google (normal for that page).
- Moved the homepage canonical from the shared layout into the homepage, so other pages (e.g. 404) no longer claim to be the homepage.

### 2026-11-03: Fix #3, sitemap

- Deleted the broken `web/public/sitemap .xml` (space in the name, so the live sitemap returned 404).
- Added `web/src/app/sitemap.js`, which builds `sitemap.xml` on every build: 26 URLs (all main pages + each Dubai property and news article, read from Sanity). Checked: valid XML, every URL is a real built page.

### 2026-11-03: Fix #4, .htaccess (www redirect, real 404s)

- Renamed `web/public/htaccess` to `.htaccess` so the server actually uses it. Checked: it is copied into `out/`.
- Rewrote it: `www.dconsult.in` → `dconsult.in` (301), `/index.html` → clean URL (301), missing pages show `404.html` with a real 404 status.
- Removed the old catch-all rule that sent every missing URL to `404.html` with a "found" status.
- http → https was left to the host, which already does it.
- **Not testable locally:** check after upload that `https://www.dconsult.in/` redirects and that the site still loads.

### 2026-11-03: Fix #5, hidden links and leftover file

- Removed the 9 hidden links (`display: none`) from the shared layout. All 9 pages are linked from the visible menu or footer, and all are in the sitemap.
- Deleted `web/public/index.txt` (stale build file).

### 2026-11-03: Fix #6, headings (h1)

- Every main page now has exactly one `h1`.
- Homepage: 3 → 1 (first section headline stays `h1`, the other two became `h2` with the same look).
- Machinery Loans, Acquisition Debt, ECB, NSE, NCDEX, MSEI, OYO, Polymatech: the second `h1` (`page-main-title`) became `h2`, same look.
- Privacy, Cookies, Disclaimers, Terms: the visible page title is now the `h1` (they had none).
- Dubai news article: title is now the `h1`, same size as before.
- Checked in a browser: heading sizes unchanged.

### 2026-11-03: Fix #7, image descriptions (alt text)

- 40 images said `alt="image"`. Now: logos say "Dhumavati Consulting LLP logo", the CEO photo names Manas Survee, Dubai property photos use the property name, the menu buttons say "Open menu"/"Close menu", and purely decorative icons have empty alt text (so Google and screen readers skip them).

### 2026-11-03: Fix #8, business details for Google and share image

- Added structured data (schema.org `FinancialService`) to every page: name, logo, phone +91-8655811111, email d@dconsult.in, address Shop No 2, Agar Bazar, Dadar West, Mumbai. All taken from the site's own footer and contact page.
- Made a share image `web/public/images/og-image.jpg` (1200×630, logo on the site's banner photo) for WhatsApp, LinkedIn, X, etc.
- Added `metadataBase`, Open Graph and Twitter card settings in `web/src/app/layout.js`.

### 2026-11-03: Fix #9, homepage video

- `web/public/video/homePage.mp4`: 9.4 MB → 2.9 MB (1920 → 1280 wide, sound track removed; it always played muted). Compared frames side by side: no visible difference.
- Added `playsInline` so it autoplays on iPhones.

### 2026-11-03: Fix #10, Dubai property and news pages get their own addresses

- Before: clicking a property saved its name in the browser and opened `/dubaiProperty/properties/`, which showed whatever was last clicked. Opened from Google, it was empty.
- Now each property and article has its own page, e.g. `/dubaiProperty/properties/oceanz/`, with its own title, description and canonical. Built from Sanity at build time (3 properties, 3 articles).
- Clicking a card on the Dubai page now opens the new address.
- The old addresses still work for old links but are set to stay out of Google.
- Checked in a browser with empty storage (like a Google visitor): property and news pages load fully.
- Note: a new property or article added in Sanity appears after the next build and upload (same as all other Sanity content on this site).

Files (renamed): `dubaiProperty/properties/page.js` → `Property.js`, `dubaiProperty/newses/page.js` → `News.js`; new `[slug]/page.js` in both folders.

### 2026-11-03: Fund Raising page kept out of Google

- `/fundRising/` shows only the footer: no content. Set to stay out of Google and removed from the sitemap. **To do:** add content, then remove the `robots` block in `web/src/app/fundRising/page.js` and add it back to `sitemap.js`.

### 2026-11-11: Security check, faster caching, automatic deploys

**Security check** (static site: no login, database or uploads, so the checks that apply are secrets, frontend, headers, packages and CI):
- Secrets: none in the code or git history.
- Added security headers in `web/public/.htaccess`: HSTS, X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy.
- Removed 7 debug `console.log` lines; added `rel="noopener noreferrer"` to the 2 external footer links.
- Only raw-HTML use is our own business-details script (fixed text, safe).
- Packages: `npm audit` reports issues, mostly in build tools. The flagged `next` issues affect Next's server, which this site doesn't use (it's uploaded as plain files). Upgrading Next is still worth planning.
- Not added: a Content-Security-Policy (needs careful testing with Google Analytics, Sanity, EmailJS and Formspree).

**Speed:** `.htaccess` now tells browsers to cache build files for a year, images and video for 30 days, and always re-check pages. Faster repeat visits help page-speed scores.

Tested all `.htaccess` rules on a local Apache server: www redirect, `/index.html` redirect, real 404, `/nse` → `/nse/`, headers and caching all work.

**Automatic deploys:** added `.github/workflows/deploy.yml`. On every push to `main` (or a manual run, or a Sanity content change), GitHub:
1. scans for leaked secrets,
2. installs and builds the site, checks the output,
3. uploads `web/out/` to Hostinger by FTPS (only changed files).
Pull requests are built and checked but never deployed. Tested locally: clean install and build on Node 20 (same as GitHub) pass.

**Needs the repo owner (admin):** add secrets `FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD` and variable `FTP_SERVER_DIR` in GitHub. Until then the deploy step stops with a clear message and nothing is uploaded.

### Still open

- Descriptions written by us should be checked by the business owner for accuracy.
- Package security warnings (37 from `npm audit`). Not SEO, but the site runs Next 14.0.3, which is old.
- Before uploading: the live site will change. Upload the whole `web/out/` folder, including the hidden `.htaccess`.

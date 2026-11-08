# Alexandra Digital History Archive

**Module:** WEDE5020 — Web Development (Introduction)
**Student:** Mkateki Mashimbye — ST10479746
**Submission:** Part 3 — Enhancing Functionality and SEO

## Purpose and design

ADHA is an educational digital museum exploring Alexandra’s past and present through its people, places and community memory. Its black-and-gold design connects the dignity of Black history with the richness of Alexandra’s heritage and its relationship to Johannesburg’s gold-mining history. The intended experience encourages reflection, belonging and pride.

The project aims to make history accessible while distinguishing historical sources, retrospective accounts, witness testimony and generated illustrations. It is a student website, not an official museum, tourism service or authenticated archival collection. MyAlexandra.co.za was an early project name; no ownership of that domain is claimed.

The mission is to share carefully referenced historical context. The long-term vision includes contributed material and multimedia; those ambitions are separate from features implemented for this submission. Community Voices currently contains written material and prompts, with no recorded oral-history collection, audio player or video collection.

## Repository and publishing status

- Repository: <https://github.com/EMGPSD/wede5020-2026-part-3-st10479746>
- Development branch last confirmed in the supplied workflow: `redesign/museum-foundation`.
- Planned GitHub Pages address: <https://emgpsd.github.io/wede5020-2026-part-3-st10479746/>. This address has not yet been verified as live.
- The November updates were prepared as replacement-file packages. Installation, final local verification, committing, pushing and deployment must be confirmed against the current repository before submission.

## Pages and information architecture

| Page | File | Purpose |
|---|---|---|
| Home | `index.html` | Welcome, past/present introduction and exhibition routes |
| Archive directory | `content.html` | Search, theme filters, sorting and eight exhibition entries |
| Alexandra through time | `timeline.html` | Sourced milestones and expandable historical context |
| Alexandra today | `alexandra-today.html` | Connections between historical context and present-day reflection |
| People of Alexandra | `people.html` | Referenced figures and everyday community contributions |
| Places that hold memory | `places.html` | Interactive map and searchable landmark directory |
| Community voices | `community-voices.html` | Written accounts, memory prompts and oral-history guidance |
| Alexandra in view | `gallery.html` | Illustrative collection and accessible image lightbox |
| About | `about.html` | Purpose, values, design rationale and creator |
| Research and resources | `research.html` | Historical reading room and source-use notes |
| Enquiries and contributions | `enquiry.html` | Research, partnership and contribution enquiries |
| Contact | `contact.html` | General messages |

All twelve pages share header and footer routes. Explore contains seven exhibition routes; About links to project information and Research; Get involved links to Enquiry and Contact. The footer provides direct links to all pages.

## Implemented functionality

- Responsive navigation with native disclosure menus, current-page indicators, mobile menu controls and Escape-key handling.
- JavaScript-generated archive entries with keyword search, theme filtering, alphabetical sorting, result counts, reset and no-results feedback. A static fallback is available without JavaScript.
- Expandable timeline context and source panels using native `details` elements.
- Leaflet 1.9.4 map with three landmark records, marker popups, search, category filters and a synchronised detail panel. Coordinates indicate approximate feature centres. The text directory remains useful if map tiles fail.
- Native-dialog gallery lightbox with previous/next controls, arrow-key navigation, image-error feedback and focus return. Static image links remain available without JavaScript.
- Distinct Enquiry and Contact forms with persistent labels, validation errors, error summaries, message review, copying, email-draft links and JSON POST submission to Formspree. Enquiries provide category-specific responses about relevant permissions, availability and cost limitations.
- Existing CSS hover transitions plus subtle JavaScript heading entrances. Later headings animate once; reduced-motion settings disable the effect. Content remains visible without animation support.

## Form configuration and delivery

`js/forms-config.js` contains public configuration, not credentials:

| Form | Online endpoint |
|---|---|
| Enquiry | `https://formspree.io/f/xzeeeeba` |
| Contact | `https://formspree.io/f/xgaaaaer` |

The configured email-draft recipient is `mkatekimashimbye@gmail.com`. Online notification recipients are managed in Formspree. On 26 October 2026, the student confirmed submissions in Formspree and notification emails in Gmail for both forms. Emeris inbox delivery was not established. No new live submission was sent during the November static audit.

A service acceptance message reports acceptance by Formspree, not guaranteed email delivery or approval of an enquiry. Sending, success, timeout, failure and retry states are handled in the client. Client-side validation improves the interface; the external service remains responsible for receiving and processing submissions.

## Styling and accessibility

`css/style.css` retains the Part 2 foundation. `css/museum.css` supplies shared museum styling, navigation, forms, archive rows, map and gallery layouts. `css/learning.css` supports About and Research; `css/exhibitions.css` supports the additional exhibitions. These files remain separate; stylesheet consolidation has not been claimed complete.

The shared palette uses black `#0b0b0b`, gold `#c9a45c`, ivory `#f4efe5` and muted `#c5bdaf`. Georgia/Times and Segoe UI/Arial provide local font fallbacks. Responsive rules include 900px and 600px adaptations, alongside earlier component breakpoints.

Accessibility provisions include skip links, visible focus indicators, semantic headings, labelled controls, live result feedback and keyboard-operable native controls. The approved desktop form spacing and corrected dialog centring are retained. Archive thumbnails keep compact dimensions, fill their boxes using the existing CSS, and have no individual captions.

## SEO, performance and security

Each page has a distinct title, description, canonical URL, viewport and robots metadata, plus Open Graph metadata. `sitemap.xml` lists the twelve planned public URLs. `robots.txt` is included, but a GitHub Pages project-path robots file is not authoritative for the entire `emgpsd.github.io` host; see `docs/SEO.md`. Verify the final host and update absolute URLs if the publishing location changes.

Keyword choices and page mapping are qualitative and documented in `docs/SEO.md`; no search-volume research or ranking results are claimed. Off-page SEO strategy, draft posts and an evidence register are prepared in `docs/OFF-PAGE-SEO.md`, `docs/PROMOTION-DRAFTS.md` and `docs/off-page-evidence.csv`. Actual public promotion and earned backlinks remain pending verification after deployment.

Fifteen referenced source images have WebP copies in `images/optimised`, with descriptive lowercase names. The distinct full-size set decreased from 37.71 MB to 4.60 MB (87.8%). Eight dedicated archive thumbnails total about 0.40 MB rather than 22.12 MB (98.2% less). These are asset-size comparisons, not measured page speeds. The originals are retained. The hero keeps high fetch priority; existing lazy loading is preserved and decoding hints are added. See `docs/IMAGE-OPTIMISATION.md` and `docs/image-sizes.csv`.

Generated catalogue text uses DOM text properties rather than interpreting source text as HTML. Form endpoints and map tiles use HTTPS; no private API key is required in the supplied configuration. Leaflet’s licence and OpenStreetMap attribution are retained. Production HTTPS and hosting behaviour must be checked after deployment; no penetration test or security certification is claimed.

## Running and checking locally

Open the project folder in VS Code and run it through a local HTTP server, such as Live Server. Start at `index.html`. No build step or package installation is required. Internet access is needed for online form submission and OpenStreetMap tiles.

The supplied-file audit checked page titles, descriptions, viewport metadata, unique IDs, local destinations and fragment links, custom JavaScript syntax, archive selection logic and form helper behaviour. Subsequent package checks covered animation behaviour in a simulated environment, image paths, preserved metadata and layouts, and decoding of all 23 optimised files. These checks do not substitute for browser testing.

Final local checks: open all twelve pages at desktop and mobile widths; check navigation, keyboard controls, archive search/filter/sort/reset, map controls, all gallery images and form validation. Check online submissions on the deployed origin and confirm notifications separately. Record actual results before claiming acceptance. No current Lighthouse result is available.

## Changelog

### Part 1 — September 2026

- Established project purpose, initial HTML pages, navigation, source collection and GitHub workflow.
- The earlier README records a temporary `content.html` to `services.html` rename; Part 2 restored `content.html`, which is the current filename.

### Part 2 — October 2026

- Added external CSS, base typography, Flexbox layouts, form controls and responsive media queries across the original five pages.
- Moved styling into external CSS and refined page alignment and image sizing.

### Part 3 — Part 2 feedback correction

- Renamed `CSS` to `css` to match the stylesheet links and avoid failure on case-sensitive hosting. The correction was committed as `8e7d51a` before subsequent integration.
- Preserved this feedback correction in the changelog, as required by the POE.

### Part 3 — 25–26 October 2026: museum and functionality

- Rebuilt Home and shared components around the black-and-gold digital museum concept; added responsive layouts, skip links, focus styling, mobile navigation and current-page indicators.
- Renamed `IMAGES` to `images` and updated references. The final lowercase path supersedes the earlier README note about retaining uppercase `IMAGES`.
- Added the searchable eight-entry archive directory and sourced timeline with expandable context.
- Added the interactive Leaflet landmark map, synchronised place directory and source notes.
- Added the six-item gallery, accessible lightbox and corrected centring after the original margin reset affected the dialog.
- Redesigned Enquiry and Contact with consistent titles, centred desktop layouts, panel padding, validation, tailored responses and message review.
- Added About, Research, Alexandra Today, People and Community Voices; unified navigation across twelve pages.
- Connected the two Formspree endpoints and corrected sending/submitted button states. The student confirmed dashboard receipt and Gmail notifications for both forms on 26 October.

Previously reported pushed milestones include `70a3cd4` (foundation), `e6afaf3` (timeline), `d76dc8e` (map), `c5aa179` (gallery) and `1f80578` (forms). These describe the earlier workflow; they do not prove the later packages have been pushed.

### Part 3 — generated media development

- Replaced archive thumbnail concepts with distinct scenes covering infrastructure, a family album, street dancing, the Heritage Centre, intergenerational conversation, an elevated view, shared photographs and community archiving.
- Adopted a consistent golden-hour atmosphere while distinguishing generated interpretation from historical evidence.
- Kept one collection-level AI notice for archive thumbnails rather than adding individual thumbnail captions. Full source records remain part of project documentation.

### 8 November 2026 — prepared completion updates

- Added page-specific SEO metadata, canonical URLs, Open Graph metadata, `robots.txt`, `sitemap.xml` and documented keyword mapping.
- Prepared an off-page strategy, promotion drafts and an evidence register; actual publication and backlinks remain pending.
- Added once-only JavaScript heading animation with reduced-motion and unsupported-browser handling, preserving existing navigation code.
- Reconnected missing community medallion references and replaced the unavailable gallery landscape with the supplied generated view; updated its category and labels.
- Corrected all eight archive image descriptions and provenance records, Home’s bus/minibus alt text and the gallery timeline wording. Removed incorrect source attribution from the album and elevated-view records.
- Generated compressed WebP copies and dedicated archive thumbnails, updated references and retained originals and existing layout rules.
- Consolidated the README into current project information, a single changelog and a reference list. Preserved the earlier README in `docs/README-HISTORY.md` for traceability.

These November changes are prepared deliverables. The final Git commit, push, deployed URL, browser acceptance and promotion evidence must still be recorded from actual results.

## Remaining submission work

- Confirm all prepared files are installed and pass final browser checks.
- Complete missing generated-media reference details in `docs/MEDIA-REGISTER.csv` using actual generation links and access dates; do not invent bibliographic details.
- Commit and push the final website to the Part 3 repository, then deploy and verify the public address and HTTPS.
- Verify the live forms, map, images, metadata, sitemap and responsive layouts; record performance results if measured.
- Publish approved promotion material and record genuine external links/evidence if required for the off-page criteria.
- Submit the repository link to the learning management system and retain the verified live URL in this README.

## References

References below combine the recorded earlier sources and the November implementation sources. A recorded access date is retained where available. Entries marked “access date not recorded” need the student’s actual date before final submission. Historical publication years carried forward from the original README are identified where not independently verified. The archived README preserves the original wording.

### Historical and geographical sources

The Presidency, 2012. Address by President Jacob Zuma at the event to mark the Centenary of Alexandra Township. [online] Available at: <https://www.thepresidency.gov.za/address-president-jacob-zuma-event-mark-centenary-alexandra-township> [Accessed 25 October 2026].

Phahle, R., 2019. The 1957 Alexandra Bus Boycott and its unsung heroes. [online] Available at: <https://sahistory.org.za/archive/1957-alexandra-bus-boycott-and-its-unsung-heroes-roseinnes-phahle-june-2019> [Accessed 25 October 2026].

Truth and Reconciliation Commission, 1996. Human Rights Violations hearing: Bennet Lekalakala, Alexandra, 29 October. [online] Available at: <https://www.justice.gov.za/trc/hrvtrans/alex/lekalaka.htm> [Accessed 25 October 2026].

Peter Rich Architects, 2018. Alexandra Heritage Centre. [online] Available at: <https://www.peterricharchitects.com/alexandra-heritage-centre> [Accessed 25 October 2026].

Joburg Tourism Company, n.d.. Alexandra Stadium. [online] Available at: <https://visit.joburg/things-to-do/alexandra-stadium/> [Accessed 25 October 2026].

Joburg Tourism Company, n.d.. Things to do: official tourism directory. [online] Available at: <https://visit.joburg/leisure/things-to-do/> [Accessed 25 October 2026].

Mapcarta, n.d.. Alexandra Heritage Centre: coordinate record. [online] Available at: <https://mapcarta.com/W794712819> [Access date not recorded].

Mapcarta, n.d.. Mandela’s Alexandra home: coordinate record. [online] Available at: <https://mapcarta.com/W794712820> [Access date not recorded].

Mapcarta, n.d.. Alexandra Stadium: coordinate record. [online] Available at: <https://mapcarta.com/W1233252354> [Access date not recorded].

South African History Online, 2025. Alexandra, Township in Johannesburg. [online] Available at: <https://sahistory.org.za/place/alexandra-township-johannesburg> [Access date not recorded].

South African Tourism, 2026. Alexandra Heritage Precinct — historic and iconic. [online] Available at: <https://www.southafrica.net/za/en/travel/article/alexandra-heritage-precinct-historic-and-iconic> [Access date not recorded].

Wikipedia contributors, 2026. Alexandra, South Africa. [online] Available at: <https://en.wikipedia.org/wiki/Alexandra,_South_Africa> [Access date not recorded].

City of Johannesburg, 2018. Why Alexandra survived apartheid. [online] Available at: <https://joburg.org.za/play_/Pages/Play%20in%20Joburg/Culture%20and%20Heritage/Links/Why-Alexandra-survived-apartheid.aspx> [Access date not recorded].

The direct Alexandra Stadium listing timed out during the earlier review; the official tourism directory was available. Mapcarta entries support approximate coordinates, not historical narrative. The publication years on the four initial background references (SAHO, South African Tourism, Wikipedia and City of Johannesburg) are carried forward from the earlier README and require verification.

### Image references and AI assistance

Sowetan, 2019. Waiting to exhale: the story of Alexandra township. [online] Available at: <https://www.sowetan.co.za/news/south-africa/2019-10-18-waiting-to-exhale-the-story-of-alexandra-township/> [Accessed 26 October 2026].

The Heritage Portal, n.d.. Alexandra Heritage Centre — Alexandra Johannesburg. [online] Available at: <https://www.theheritageportal.co.za/thread/alexandra-heritage-centre-alexandra-johannesburg> [Accessed 28 October 2026].

OpenAI, 2026. Golden Road Through Alexandra Township. [AI-generated image] Available at: <https://chatgpt.com/share/6adf2764-30d4-83ea-a754-7bdf4fe1dd0c> [Access date not recorded].

The Sowetan photograph informed the hero atmosphere; The Heritage Portal photograph informed the generated Heritage Centre interpretation. These source photographs are separate from the generated outputs. Authorship and individual generation links for the remaining outputs must be completed in the media register. The supplied hero conversation URL is student-provided; its contents were not independently confirmed. The creator portrait is supplied as a personal project photograph.

Google, 2026. Gemini: September 1 conversation (earlier README identifies the provider as Alphabet Inc.). [online] Available at: <https://share.gemini.google/d2NUPZtkqrWn> [Access date not recorded].

OpenAI, 2026. ChatGPT: September 1 conversation. [online] Available at: <https://chatgpt.com/share/6a9728af-56c8-83ea-84d2-4549ec4f6a8b> [Access date not recorded].

The original README records these two conversations as language-model assistance. Their precise contribution should follow the student’s own AI declaration.

### Code, mapping and implementation sources

Sookha, J., 2026. 01-html-tags-only.html [Source code; version 955dfb5b951fcb479b0b4899f41052fe95cedbb3 recorded in the earlier README]. [online] Available at: <https://github.com/jesselsookha/WEDE2026/commits/main/code/html> [Accessed 04 September 2026].

Sookha, J., 2026. 22-css-float-layout.html [Source code; version 955dfb5b951fcb479b0b4899f41052fe95cedbb3 recorded in the earlier README]. [online] Available at: <https://github.com/jesselsookha/WEDE2026/blob/main/code/css/22-css-float-layout.html> [Accessed 04 September 2026].

Sookha, J., 2026. 21-css-visualize-box-model.html [Source code; version 955dfb5b951fcb479b0b4899f41052fe95cedbb3 recorded in the earlier README]. [online] Available at: <https://github.com/jesselsookha/WEDE2026/blob/main/code/css/21-css-visualize-box-model.html> [Accessed 04 September 2026].

Sookha, J., 2026. 20-css-pseudo-classes1.html [Source code; version 955dfb5b951fcb479b0b4899f41052fe95cedbb3 recorded in the earlier README]. [online] Available at: <https://github.com/jesselsookha/WEDE2026/blob/main/code/css/20-css-pseudo-classes1.html> [Accessed 04 September 2026].

Sookha, J., 2026. 15-css-selector-matching.html [Source code; version 955dfb5b951fcb479b0b4899f41052fe95cedbb3 recorded in the earlier README]. [online] Available at: <https://github.com/jesselsookha/WEDE2026/blob/main/code/css/15-css-selector-matching.html> [Accessed 04 September 2026].

MDN Web Docs, n.d.. Using the Fetch API. [online] Available at: <https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch> [Accessed 25 October 2026].

MDN Web Docs, n.d.. HTMLInputElement: checkValidity() method. [online] Available at: <https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/checkValidity> [Accessed 25 October 2026].

Leaflet, n.d.. Leaflet: an open-source JavaScript library for interactive maps. [online] Available at: <https://leafletjs.com/> [Access date not recorded].

OpenStreetMap contributors, n.d.. Copyright and licence. [online] Available at: <https://www.openstreetmap.org/copyright> [Access date not recorded].

Formspree, n.d.. Formspree: form submission service. [online] Available at: <https://formspree.io/> [Access date not recorded].

Google Search Central, n.d.. Get started with SEO: a developer’s guide. [online] Available at: <https://developers.google.com/search/docs/fundamentals/get-started-developers> [Accessed 8 November 2026].

Google Search Central, n.d.. Build and submit a sitemap. [online] Available at: <https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap> [Accessed 8 November 2026].

Google, n.d.. Robots.txt specifications. [online] Available at: <https://developers.google.com/crawling/docs/robots-txt/robots-txt-spec> [Accessed 8 November 2026].

Google Search Central, n.d.. Search Engine Optimization Starter Guide. [online] Available at: <https://developers.google.com/search/docs/fundamentals/seo-starter-guide> [Accessed 8 November 2026].

Google Search Central, n.d.. Spam policies for Google web search. [online] Available at: <https://developers.google.com/search/docs/essentials/spam-policies> [Accessed 8 November 2026].

MDN Web Docs, n.d.. Intersection Observer API. [online] Available at: <https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API> [Accessed 8 November 2026].

MDN Web Docs, n.d.. prefers-reduced-motion. [online] Available at: <https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion> [Accessed 8 November 2026].

MDN Web Docs, n.d.. The image embed element. [online] Available at: <https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/img> [Accessed 8 November 2026].

MDN Web Docs, n.d.. Multimedia: Images. [online] Available at: <https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Performance/Multimedia> [Accessed 8 November 2026].

The local Leaflet distribution is version 1.9.4; its BSD licence is included at `vendor/leaflet/LICENSE`. Map attribution remains visible on the website.

# Alexandra Digital History Archive

**Module:** WEDE5020 — Web Development (Introduction)
**Student:** Mkateki Mashimbye — ST10479746
**Submission:** Part 3 — Enhancing Functionality and SEO

## Purpose and design

ADHA is an educational digital museum exploring Alexandra’s past and present through its people, places and community memory. Its black-and-gold design connects the dignity of Black history with the richness of Alexandra’s heritage and its relationship to Johannesburg’s gold-mining history. The intended experience encourages reflection, belonging and pride.

The project aims to make history accessible while distinguishing historical sources, retrospective accounts, witness testimony and generated illustrations. It is a student website, not an official museum, tourism service or authenticated archival collection. MyAlexandra.co.za was an early project name; no ownership of that domain is claimed.

The mission is to share carefully referenced historical context. The long-term vision includes contributed material and multimedia; those ambitions are separate from features implemented for this submission. Community Voices currently contains written material and prompts, with no recorded oral-history collection, audio player or video collection.

## Repository and publishing status

- Official submission: <https://github.com/EMGPSD/wede5020-2026-part-3-st10479746>
- Publishing repository: <https://github.com/ST10479746/alexandra-digital-history-archive>
- Live website: <https://st10479746.github.io/alexandra-digital-history-archive/>
- The redesign branch was merged into `main`.
- Both repositories contain the confirmed mobile hero correction. The official correction is commit `4845bdf`; the publishing correction is commit `5072014`.
- The EMGPSD repository remains the official submission. The personal repository supplies the live website.

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
- Twenty-image gallery organised into five themes, with keyword search, category filters, alphabetical sorting, result counts and reset. Locally hosted GLightbox 3.3.1 supplies enlarged viewing, previous/next controls, keyboard and touch navigation, and focus return. Static image links remain available without JavaScript (Biati Digital, 2025).
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

`css/style.css` retains the Part 2 foundation. `css/museum.css` supplies shared museum styling, navigation, forms, archive rows and map layouts. `css/gallery.css` supplies the expanded gallery and GLightbox positioning, image sizing and caption spacing. `css/learning.css` supports About and Research; `css/exhibitions.css` supports the additional exhibitions. These files remain separate; stylesheet consolidation has not been claimed complete.

The shared palette uses black `#0b0b0b`, gold `#c9a45c`, ivory `#f4efe5` and muted `#c5bdaf`. Georgia/Times and Segoe UI/Arial provide local font fallbacks. Responsive rules include 900px and 600px adaptations, alongside earlier component breakpoints.

Accessibility provisions include skip links, visible focus indicators, semantic headings, labelled controls, live result feedback and keyboard-operable native controls. The approved desktop form spacing and corrected lightbox positioning are retained. Archive thumbnails keep compact dimensions, fill their boxes using the existing CSS, and have no individual captions.

## SEO, performance and security

Each page has a distinct title, description, canonical URL, viewport and robots metadata, plus Open Graph metadata. All twelve public pages also contain page-specific keywords and the author name Mkateki Mashimbye. Keywords describe the subject of each page; no ranking improvement is claimed. `sitemap.xml` lists the twelve public page URLs. `robots.txt` is included, but a GitHub Pages project-path robots file is not authoritative for the entire `st10479746.github.io` host. Absolute publishing URLs use the verified personal GitHub Pages address. Update them if the publishing location changes.

Keyword choices follow each page’s purpose: township history on Home, exhibition search in the directory, chronology on Timeline, people and cultural memory on People, landmark names on Places, and contribution or contact terms on the relevant forms. This is qualitative topic mapping; no search-volume research or ranking results are claimed. Off-page work remains a proposed activity: share the live project with relevant educational or heritage audiences, request genuine relevant links, and record the publication URL, date and evidence. Outgoing reference links are not backlinks. No external promotion or earned backlink is claimed as complete.

Fifteen referenced source images have WebP copies in `images/optimised`, with descriptive lowercase names. The distinct full-size set decreased from 37.71 MB to 4.60 MB (87.8%). Eight dedicated archive thumbnails total about 0.40 MB rather than 22.12 MB (98.2% less). These are asset-size comparisons, not measured page speeds. The originals are retained. The hero keeps high fetch priority; existing lazy loading is preserved and decoding hints are added. The current gallery uses twenty dedicated thumbnails and twenty larger WebP files in `images/gallery/`. Gallery dimensions and media records are supplied in `docs/GALLERY-IMAGE-SIZES.csv` and `docs/GALLERY-MEDIA-REGISTER.csv`; these forty displayed assets are separate from the earlier optimisation figures. Older unused files may remain on disk.

Generated catalogue text uses DOM text properties rather than interpreting source text as HTML. Form endpoints and map tiles use HTTPS; no private API key is required in the supplied configuration. Leaflet’s licence, GLightbox’s MIT licence and OpenStreetMap attribution are retained. The published website was verified as accessible over HTTPS. No penetration test or security certification is claimed.

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

Previously reported pushed milestones include `70a3cd4` (foundation), `e6afaf3` (timeline), `d76dc8e` (map), `c5aa179` (gallery) and `1f80578` (forms). The later completion updates were merged into main; the verified publishing status appears above.

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

The completion updates have been committed, pushed and published. Deployment verification is recorded below. Reference completion and off-page promotion evidence remain outstanding.

### 9 November 2026 — Deployment verification

- Confirmed the twelve-page website is accessible through GitHub Pages.
- Verified published page responses, image and stylesheet availability,
  canonical URLs, sitemap and custom 404 response.
- Confirmed the corrected mobile hero displays properly on the live website.
- Saved the mobile correction in both the official and publishing repositories.

### 9 November 2026 — gallery expansion and metadata completion

- Expanded the earlier six-image gallery to twenty distinct images across Streets, People, Places, Family and memory, and Archives and heritage.
- Added gallery search, theme filtering, alphabetical sorting, result feedback and static fallback links.
- Integrated locally hosted GLightbox 3.3.1 with its MIT licence; refined viewer position, image size and spacing above the description following desktop review.
- Added twenty WebP thumbnails, twenty larger images, image-size records and a media register. Gallery captions distinguish generated interpretation from documentary evidence.
- Committed the gallery as `9971c6a` in the official repository and published the gallery update through the personal repository.
- Added unique keyword metadata and the project author to all twelve public pages: official commit `23672c3`, publishing commit `6f7cc01`. Terminal output confirms both pushes succeeded. The publishing helper script is optional and is not required for the live pages to work.
- Updated this README with implementation excerpts and an evidence capture checklist. Screenshot capture and final reference reconciliation remain pending.

## Project structure

| Location | Contents and role |
|---|---|
| Root HTML files | Twelve public pages plus `404.html` |
| `css/` | Legacy styling, shared museum components, learning pages, exhibitions and gallery |
| `js/` | Navigation, animation, archive/gallery data and filtering, map and form logic |
| `images/optimised/` | Compressed page images and compact archive thumbnails |
| `images/gallery/` | Twenty active gallery thumbnails and twenty larger WebP images; earlier files may remain |
| `vendor/leaflet/` | Local mapping library, images and licence |
| `vendor/glightbox/` | Local lightbox library, stylesheet and MIT licence |
| `docs/` | Supporting records; gallery CSVs describe image dimensions and provenance |
| `docs/evidence/` | Intended location for final screenshots; add actual captures before linking them |
| `robots.txt`, `sitemap.xml` | Crawler instructions and twelve published page URLs |
| `.nojekyll` | Publishes static files without Jekyll processing |
| `Add-PageMetadata.ps1` | Development helper; the deployed HTML already contains its output |

## Implementation evidence and code excerpts

The excerpts below are taken from the supplied project files. They explain implementation; they are not screenshots or proof of every browser interaction.

### Dynamic content and search

`js/archive.js` builds exhibition cards from structured records and inserts the results into the directory. Search combines all query words with the selected category, while sorting changes the matching order. Result counts, empty states and reset help visitors understand the displayed set. The gallery applies the same interaction pattern to twenty images.

```javascript
function selectGalleryItems(items, query = "", category = "all", sort = "curated") {
  const words = query.trim().toLocaleLowerCase("en").split(/\s+/).filter(Boolean);
  const matches = items.filter((item) => {
    const text = [item.title, item.alt, item.caption, item.categoryLabel, item.keywords]
      .join(" ").toLocaleLowerCase("en");
    return (category === "all" || item.category === category) &&
      words.every((word) => text.includes(word));
  });
  if (sort === "az" || sort === "za") {
    matches.sort((a, b) => (sort === "az" ? 1 : -1) * a.title.localeCompare(b.title, "en"));
  }
  return matches;
}
```

### Gallery library and image viewing

GLightbox enlarges the selected image while preserving the browsing context. The viewer receives the currently filtered image list, so its arrows follow the displayed results. Caption text is escaped before being passed to the library. The local distribution avoids a runtime CDN dependency (Biati Digital, 2025).

```javascript
      const reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      viewer = GLightbox({
        selector: ".unused-gallery-trigger",
        elements: slides(),
        skin: "clean",
        zoomable: false,
        touchNavigation: true,
        keyboardNavigation: true,
        loop: false,
        preload: false,
        moreLength: 0,
        openEffect: reduced ? "none" : "fade",
        closeEffect: reduced ? "none" : "fade",
        slideEffect: reduced ? "none" : "fade",
      });
```

The approved viewer styling separates image and caption, leaves space below the browser edge, and adapts at mobile widths. The student confirmed the revised image size and spacing locally. Record current desktop and mobile screenshots rather than using the earlier screenshots showing the positioning fault.

### Interactive map and historical context

`js/places.js` creates a Leaflet map and marker layer, then loads OpenStreetMap tiles with attribution. Search and category controls synchronise the map and text directory. Text records remain available if tiles fail; coordinates are approximate (Leaflet, s.a.). OpenStreetMap supplies the attributed map data (OpenStreetMap contributors, s.a.). Timeline disclosure panels expose additional context and source notes without requiring every visitor to read the full text immediately.

```javascript
        map = L.map(mapElement, { scrollWheelZoom: false, keyboard: true });
        markerLayer = L.layerGroup().addTo(map);
        const tiles = L.tileLayer(
          "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
          {
            maxZoom: 19,
            attribution:
              '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>',
          },
        ).addTo(map);
        status.textContent =
          "Loading street-map tiles… You can already explore the place list.";
```

### Form validation, response and asynchronous submission

Enquiry and Contact serve different purposes. Both validate entered information, identify errors and prepare a message for review. Enquiry additionally provides category-specific guidance. A reviewed message can be copied, opened as an email draft, or submitted online. Configured endpoints populate the form action; JSON POST requests provide asynchronous submission (MDN Web Docs, 2025).

```javascript
        const result = await fetch(endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            ...prepared.data,
            subject: prepared.message.subject,
            formType: mode,
          }),
          signal: controller.signal,
        });
        if (!result.ok) throw new Error("Service rejected request");
        const type = result.headers.get("content-type") || "";
        if (type.includes("application/json")) {
```

A fifteen-second abort timeout prevents an indefinitely pending interface. Status text distinguishes acceptance by the service from email delivery. The email-draft route encodes the subject and body:

```javascript
draft.href = `mailto:${recipient}?subject=${encodeURIComponent(message.subject)}&body=${encodeURIComponent(message.body)}`;
```

Opening the visitor’s configured mail application with the correct recipient, subject and body still needs an explicit recorded test. Formspree receipt and Gmail notifications were confirmed separately on 26 October; those results do not prove the email-draft route.

### Animation and accessibility

`js/main.js` observes later section headings and animates each once. The effect changes opacity and vertical position over 380 milliseconds. Reduced-motion preferences, focus handling and unsupported-browser guards preserve readable content (MDN Web Docs, 2026). The reduced-motion media feature provides the preference used by this project (MDN Web Docs, s.a.).

```javascript
      const animation = target.animate(
        [
          { opacity: 0.85, transform: "translateY(10px)" },
          { opacity: 1, transform: "translateY(0)" },
        ],
        { duration: 380, easing: "ease-out", fill: "none" },
      );
      active.set(target, animation);
```

### Metadata and publishing

Home contains the following page-specific metadata; each of the other eleven public pages uses its own topic keywords:

```html
<meta name="keywords" content="Alexandra history, Alexandra township, Johannesburg heritage, digital history archive, community memory">
<meta name="author" content="Mkateki Mashimbye">
```

Unique titles and descriptions describe each destination; headings and internal links organise its content. Canonical and Open Graph URLs use the personal publishing address. Sitemap and crawler files support discovery, while compressed images reduce transfer sizes. The developer SEO guidance supports the page-discovery approach (Google Search Central, s.a.). The sitemap guidance supports the sitemap format (Google Search Central, s.a.). The crawler specification explains the robots rules (Google, s.a.). Rankings and measured load-time improvements have not been demonstrated.

## Screenshot and final test evidence

Save actual final captures in `docs/evidence/`. The proposed filenames below are a capture plan, not existing evidence. Embed each screenshot in this README only after the file exists, with a short explanation of the demonstrated result. Use fictional test details and omit private inbox content.

| Proposed filename | What to demonstrate | Evidence status |
|---|---|---|
| `home-desktop.png` | Header, hero and museum layout at desktop width | Capture pending; mobile correction accepted |
| `home-tablet.png` | Readable layout and navigation at a tablet width, such as 768px | Capture and recorded test pending |
| `home-mobile.png` | Complete hero photograph, welcome text and no horizontal overflow at 390px | Live correction confirmed; capture pending |
| `archive-search.png` | Search, theme filter, sorting and matching result count | Working reported; capture pending |
| `timeline-context.png` | An expanded context panel and its source | Working reported; capture pending |
| `places-map.png` | Landmark marker, attribution and matching detail panel | Working reported; capture pending |
| `gallery-search.png` | Twenty-image collection, selected theme and a filtered result | Published gallery accepted; capture pending |
| `gallery-lightbox.png` | Enlarged image, separated caption and visible controls | Local layout accepted; final capture pending |
| `enquiry-validation.png` | Invalid input with field errors and summary | Functionality reported; capture pending |
| `enquiry-response.png` | Valid enquiry with relevant category response | Capture pending |
| `contact-email-draft.png` | Mail application opened with recipient, subject and full message | Explicit test and capture pending |
| `formspree-submitted.png` | Finished submission state without an indefinite spinner | Earlier receipt confirmed; deployed-origin evidence pending |
| `seo-source.png` | Title, description, keywords, author and canonical metadata | Metadata pushed; capture pending |
| `sitemap.png` and `robots.png` | Published sitemap URLs and crawler file | Capture pending; project-path robots limitation noted above |
| `deployment.png` | Live URL and successful deployment | Publication confirmed; capture pending |
| `404.png` | Custom error page at an unavailable URL | Earlier response checked; capture pending |

For each final test, record the date, browser, viewport, action and actual result alongside its screenshot. Test invalid and valid form inputs, search with no matches, reset, keyboard navigation and lightbox closing. Recheck all twelve pages on the deployed origin. Do not mark unperformed checks as passed.

## Remaining submission work

- Retain final browser-check evidence for the deployed site. The student confirmed that the other live features worked and that the corrected mobile hero displayed correctly; this does not independently confirm a new Gmail notification test.
- Complete missing generated-media reference details using actual generation links and access dates, including the gallery records in `docs/GALLERY-MEDIA-REGISTER.csv`. Reconcile image citations and bibliography entries in both directions; do not invent bibliographic details.
- Commit and push final documentation and reference changes to the official repository, then synchronise those specific files with the publishing copy without copying `.git`.
- Retain form-submission and email-notification evidence separately; record performance results if measured. Live page responses, image and stylesheet availability, canonical URLs, sitemap and custom 404 response have been checked.
- Publish approved promotion material and record genuine external links/evidence if required for the off-page criteria.
- Submit the repository link to the learning management system and retain the verified live URL in this README.

## 9 November 2026 — reference and stylesheet review

The current gallery has twenty distinct images across five themes. Its development progressed from nine selected images, to seventeen, then twenty. This update retains the current image files, theme counts, routes and viewer behaviour.

All five project stylesheets have numbered sections, explanatory comments and reference lists at the top. Rule order, selectors, declarations and media-query conditions are preserved. All eight JavaScript files have reference headers and narrative citations in explanatory comments. A stray minus before the opening comment in `js/archive.js` was removed because it prevented parsing.

The supplied course guide is followed: no year suffix letters, one source per citation, author and date in the text, URLs in reference lists, and `s.a.` for a publication date that could not be established. Titles distinguish different works by the same author and year. Historical context and generated-image credits are attributed separately. The gallery’s captions in HTML and JavaScript match.

### Source checks and limits

- MDN pages were checked for relevant API/CSS explanations and their own modification dates. These are documentation references, not an assertion that the project implementation was copied.
- GLightbox is version 3.3.1, released 21 January 2025. Leaflet is version 1.9.4. Their original licence and attribution files remain required.
- SAHO’s Alexandra entry shows an update of 29 April 2025. Its music article and the Levy extract show updates of 20 July 2026. The Nieftagodien archive record shows an update of 11 June 2019, while identifying the original 2016 publication. These webpage updates supply the website citation years under the course guide.
- Foundation, government, JDA, TRC and Human Rights Watch records support historical context; their authority does not authenticate generated scenes. Witness testimony and commemorative speeches remain identified by source type. The Rays of Hope project report is a first-party account of relief work, not independent evaluation. The architect’s dated 2018 account supports design intentions, not current visitor access. Mapcarta supplies approximate coordinates, not historical proof.
- Source disagreements are retained: the farm-purchase account gives 1904; the Mandela Foundation dates initial lodging to 1941 while the architectural account refers to 1942. Interpretive image labels avoid claiming a documented reconstruction.
- The new ChatGPT share URL is supplied by the student. Its shared contents were inaccessible during this review. No access date or specific model version has been invented. Existing student-recorded assistance and teaching-source attributions are retained below.

### Installing this code update

Merge the supplied files into the project folder, replacing matching code files. Keep all existing images, vendor libraries and other project files. The latest upload omitted `gallery.html`; the supplied page is based on the last twenty-image gallery prepared for this project. No image, vendor or Git files are included in this update. Installation, live deployment and visual checks on the student’s machine remain to be completed.

## References

### Historical and geographical sources

African National Congress, 1955. 44th National Conference: Report of the National Executive Committee, 18 December 1955. Hosted by South African History Online. [online] Available at: <https://sahistory.org.za/archive/44th-national-conference-report-national-executive-committee-18-december-1955> [Accessed 9 November 2026].

City of Johannesburg, s.a. Why Alexandra survived apartheid. [online] Available at: <https://joburg.org.za/play_/Pages/Play%20in%20Joburg/Culture%20and%20Heritage/Links/Why-Alexandra-survived-apartheid.aspx> [Accessed 9 November 2026].

Human Rights Watch, 1993. Half-Hearted Reform: The Official Response to the Rising Tide of Violence. Appendix. [online] Available at: <https://www.hrw.org/reports/1993/southafrica/7.htm> [Accessed 9 November 2026].

Joburg Tourism Company, s.a. Alexandra Stadium. [online] Available at: <https://visit.joburg/things-to-do/alexandra-stadium/> [Accessed 9 November 2026].

Johannesburg Development Agency, 2012. Celebrating 100 years of Alex. [online] Available at: <https://www.jda.org.za/celebrating-100-years-of-alex/> [Accessed 9 November 2026].

Johannesburg Development Agency, 2014. Alexandra Renewal Project improving residents’ lives. [online] Available at: <https://www.jda.org.za/alexandra-renewal-project-improving-residents-lives/> [Accessed 9 November 2026].

Lekalakala, B., 1996. Submission to the Truth and Reconciliation Commission: Alexandra hearing, 29 October 1996. [online] Available at: <https://www.justice.gov.za/trc/hrvtrans/alex/lekalaka.htm> [Accessed 9 November 2026].

Levy, N., 2026. “Bantu Education or the Street”. Extract from The Final Prize, hosted by South African History Online. Updated 20 July 2026. [online] Available at: <https://sahistory.org.za/article/bantu-education-or-street-norman-levy> [Accessed 9 November 2026].

Masuku, B., 2023. Questioning governance of urban informality: A study of township economy in Alexandra, Johannesburg. Journal of Foresight and Thought Leadership, 2(1), a20. doi:10.4102/joftl.v2i1.20. [online] Available at: <https://joftl.org/index.php/joftl/article/view/20> [Accessed 9 November 2026].

Mokonyane, N., 2010. Address by Premier of Gauteng, Ms Nomvula Mokonyane, at the funeral service of Reverend Sam Palo Buti in Alexandra. [online] Available at: <https://www.gov.za/news/speeches/address-premier-gauteng-ms-nomvula-mokonyane-funeral-service-reverend-sam-palo-buti> [Accessed 9 November 2026].

Nelson Mandela Foundation, 2009. Nelson Mandela visits his former lodging in Alexandra. [online] Available at: <https://www.nelsonmandela.org/news/entry/nelson-mandela-visits-his-former-lodging-in-alexandra> [Accessed 9 November 2026].

Nieftagodien, N. and Bonner, P., 2009. Settling on Alexandra. In: Alexandra: A History, pp. 17–40. Johannesburg: Wits University Press. Chapter summary. [online] Available at: <https://www.cambridge.org/core/books/abs/alexandra/settling-on-alexandra/66BCFF3DA6D5B60DE276A42A754982A7> [Accessed 9 November 2026].

Nieftagodien, N., 2019. Soweto forty years on: The Black student rebellion of 1976. Originally published 18 June 2016; archive updated 11 June 2019. [online] Available at: <https://sahistory.org.za/archive/soweto-forty-years-black-student-rebellion-1976-professor-noor-nieftagodien> [Accessed 9 November 2026].

Peppler, T., 2020. THANK YOU for partnering with Rays of Hope! Project report, 8 July 2020. Rays of Hope Alexandra, hosted by GlobalGiving. [online] Available at: <https://training.globalgiving.org/microprojects/hope4alex/reports/> [Accessed 9 November 2026].

Peter Rich Architects, 2018. Alexandra Heritage Centre. Dated project account. [online] Available at: <https://www.peterricharchitects.com/alexandra-heritage-centre> [Accessed 9 November 2026].

Phahle, R., 2019. The 1957 Alexandra Bus Boycott and its unsung heroes. June. [online] Available at: <https://sahistory.org.za/archive/1957-alexandra-bus-boycott-and-its-unsung-heroes-roseinnes-phahle-june-2019> [Accessed 25 October 2026].

South African Government, 2020. Freedom Day 2020. [online] Available at: <https://www.gov.za/FreedomDay2020> [Accessed 9 November 2026].

South African History Online, 2025. Alexandra, Township in Johannesburg. Updated 29 April 2025. [online] Available at: <https://sahistory.org.za/place/alexandra-township-johannesburg> [Accessed 9 November 2026].

South African History Online, 2026. Music and culture as forms of resistance. Updated 20 July 2026. [online] Available at: <https://sahistory.org.za/article/music-and-culture-forms-resistance> [Accessed 9 November 2026].

The Presidency, 2012. Address by President Jacob Zuma at an event to mark the centenary of Alexandra Township. 22 September. [online] Available at: <https://www.thepresidency.gov.za/address-president-jacob-zuma-event-mark-centenary-alexandra-township> [Accessed 25 October 2026].

### Code and CSS documentation

Biati Digital, 2025. GLightbox (Version 3.3.1). [Source code] Available at: <https://github.com/biati-digital/glightbox/tree/v3.3.1> [Accessed 9 November 2026].

Leaflet, 2023. Leaflet (Version 1.9.4). [Source code] Available at: <https://github.com/Leaflet/Leaflet/tree/v1.9.4> [Accessed 9 November 2026].

Leaflet, s.a. Leaflet API reference (Version 1.9.4). [online] Available at: <https://leafletjs.com/reference-1.9.4.html> [Accessed 9 November 2026].

MDN Web Docs, 2025. Element: animate() method. Updated Dec 17, 2025. [online] Available at: <https://developer.mozilla.org/en-US/docs/Web/API/Element/animate> [Accessed 9 November 2026].

MDN Web Docs, 2025. The box model. Updated Nov 7, 2025. [online] Available at: <https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Box_model> [Accessed 9 November 2026].

MDN Web Docs, 2025. Using the Fetch API. Updated Aug 20, 2025. [online] Available at: <https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch> [Accessed 9 November 2026].

MDN Web Docs, 2025. encodeURIComponent(). Updated Oct 30, 2025. [online] Available at: <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent> [Accessed 9 November 2026].

MDN Web Docs, 2026. :focus-visible CSS pseudo-class. Updated Oct 16, 2026. [online] Available at: <https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/:focus-visible> [Accessed 9 November 2026].

MDN Web Docs, 2026. Array. Updated Jul 28, 2026. [online] Available at: <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array> [Accessed 9 November 2026].

MDN Web Docs, 2026. Array.prototype.filter(). Updated Oct 26, 2026. [online] Available at: <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter> [Accessed 9 November 2026].

MDN Web Docs, 2026. Basic concepts of grid layout. Updated Aug 27, 2026. [online] Available at: <https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Grid_layout/Basic_concepts> [Accessed 9 November 2026].

MDN Web Docs, 2026. Client-side form validation. Updated Oct 9, 2026. [online] Available at: <https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation> [Accessed 9 November 2026].

MDN Web Docs, 2026. Document: createElement() method. Updated Apr 6, 2026. [online] Available at: <https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement> [Accessed 9 November 2026].

MDN Web Docs, 2026. EventTarget: addEventListener() method. Updated Sep 30, 2026. [online] Available at: <https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener> [Accessed 9 November 2026].

MDN Web Docs, 2026. Intersection Observer API. Updated Sep 2, 2026. [online] Available at: <https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API> [Accessed 9 November 2026].

MDN Web Docs, 2026. Using CSS custom properties (variables). Updated Aug 27, 2026. [online] Available at: <https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties> [Accessed 9 November 2026].

MDN Web Docs, 2026. Using media queries. Updated Sep 8, 2026. [online] Available at: <https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Media_queries/Using> [Accessed 9 November 2026].

MDN Web Docs, 2026. Window: matchMedia() method. Updated Aug 21, 2026. [online] Available at: <https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia> [Accessed 9 November 2026].

MDN Web Docs, 2026. object-fit CSS property. Updated Jul 21, 2026. [online] Available at: <https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/object-fit> [Accessed 9 November 2026].

### Current gallery artwork

OpenAI, 2026. Land before the township. [AI-generated image, ChatGPT; prompted and selected by Mkateki Mashimbye] Available at: <images/gallery/selected-land-purchase.webp> [Project file supplied 9 November 2026].

OpenAI, 2026. Arriving to build a home, 1912. [AI-generated image, ChatGPT; prompted and selected by Mkateki Mashimbye] Available at: <images/gallery/selected-community-beginnings.webp> [Project file supplied 9 November 2026].

OpenAI, 2026. Ownership and belonging, 1912. [AI-generated image, ChatGPT; prompted and selected by Mkateki Mashimbye] Available at: <images/gallery/selected-freehold-ownership.webp> [Project file supplied 9 November 2026].

OpenAI, 2026. A neighbourhood’s needs, early years. [AI-generated image, ChatGPT; prompted and selected by Mkateki Mashimbye] Available at: <images/gallery/selected-street-inspection.webp> [Project file supplied 9 November 2026].

OpenAI, 2026. Walking together, 1940. [AI-generated image, ChatGPT; prompted and selected by Mkateki Mashimbye] Available at: <images/gallery/selected-bus-boycott.webp> [Project file supplied 9 November 2026].

OpenAI, 2026. A room and a beginning, early 1940s. [AI-generated image, ChatGPT; prompted and selected by Mkateki Mashimbye] Available at: <images/gallery/alexandra-mandela-backyard-room-1940s.webp> [Project file supplied 9 November 2026].

OpenAI, 2026. Returning with what remains, mid-1940s. [AI-generated image, ChatGPT; prompted and selected by Mkateki Mashimbye] Available at: <images/gallery/selected-families-returning.webp> [Project file supplied 9 November 2026].

OpenAI, 2026. A shadow across home, 1948. [AI-generated image, ChatGPT; prompted and selected by Mkateki Mashimbye] Available at: <images/gallery/selected-apartheid-shadows.webp> [Project file supplied 9 November 2026].

OpenAI, 2026. Learning beyond the classroom, 1950s. [AI-generated image, ChatGPT; prompted and selected by Mkateki Mashimbye] Available at: <images/gallery/selected-education-boycott.webp> [Project file supplied 9 November 2026].

OpenAI, 2026. The sound of a neighbourhood, 1950s. [AI-generated image, ChatGPT; prompted and selected by Mkateki Mashimbye] Available at: <images/gallery/alexandra-neighbourhood-jazz-1950s.webp> [Project file supplied 9 November 2026].

OpenAI, 2026. Students finding their voice, June 1976. [AI-generated image, ChatGPT; prompted and selected by Mkateki Mashimbye] Available at: <images/gallery/selected-student-march.webp> [Project file supplied 9 November 2026].

OpenAI, 2026. Keeping a place called home, 1979. [AI-generated image, ChatGPT; prompted and selected by Mkateki Mashimbye] Available at: <images/gallery/alexandra-save-alex-community-rally-1979.webp> [Project file supplied 9 November 2026].

OpenAI, 2026. A street in resistance, February 1986. [AI-generated image, ChatGPT; prompted and selected by Mkateki Mashimbye] Available at: <images/gallery/alexandra-six-days-war-street-1986.webp> [Project file supplied 9 November 2026].

OpenAI, 2026. A neighbourhood divided, 1991–1992. [AI-generated image, ChatGPT; prompted and selected by Mkateki Mashimbye] Available at: <images/gallery/alexandra-hostels-family-homes-1990s.webp> [Project file supplied 9 November 2026].

OpenAI, 2026. Waiting to vote, April 1994. [AI-generated image, ChatGPT; prompted and selected by Mkateki Mashimbye] Available at: <images/gallery/alexandra-democratic-election-queue-1994.webp> [Project file supplied 9 November 2026].

OpenAI, 2026. Building towards better housing, 2001. [AI-generated image, ChatGPT; prompted and selected by Mkateki Mashimbye] Available at: <images/gallery/alexandra-renewal-housing-construction-2001.webp> [Project file supplied 9 November 2026].

OpenAI, 2026. A century shared in celebration, 2012. [AI-generated image, ChatGPT; prompted and selected by Mkateki Mashimbye] Available at: <images/gallery/alexandra-centenary-street-celebration-2012.webp> [Project file supplied 9 November 2026].

OpenAI, 2026. Neighbours nourishing neighbours, 2020. [AI-generated image, ChatGPT; prompted and selected by Mkateki Mashimbye] Available at: <images/gallery/alexandra-lockdown-community-kitchen-2020.webp> [Project file supplied 9 November 2026].

OpenAI, 2026. Livelihoods across a market stall. [AI-generated image, ChatGPT; prompted and selected by Mkateki Mashimbye] Available at: <images/gallery/alexandra-street-trading-vegetables.webp> [Project file supplied 9 November 2026].

OpenAI, 2026. Football and shared momentum. [AI-generated image, ChatGPT; prompted and selected by Mkateki Mashimbye] Available at: <images/gallery/alexandra-neighbourhood-football.webp> [Project file supplied 9 November 2026].

OpenAI, 2026. Alexandra project conversation supplied for this reference review. [online] Available at: <https://chatgpt.com/share/6af23c70-4da8-83ea-90e9-1a2af411aa09> [Student-supplied URL, received 9 November 2026; shared contents could not be independently accessed].

### Earlier project sources and assistance records

Earlier recorded access dates are retained; entries without a recorded date are not presented as newly verified. Wikipedia is a discovery aid, not the authority used for the current gallery captions.

Joburg Tourism Company, s.a. Things to do: official tourism directory. [online] Available at: <https://visit.joburg/leisure/things-to-do/> [Accessed 25 October 2026].

Mapcarta, s.a. Alexandra Heritage Centre: coordinate record. [online] Available at: <https://mapcarta.com/W794712819> [Access date not recorded].

Mapcarta, s.a. Mandela’s Alexandra home: coordinate record. [online] Available at: <https://mapcarta.com/W794712820> [Access date not recorded].

Mapcarta, s.a. Alexandra Stadium: coordinate record. [online] Available at: <https://mapcarta.com/W1233252354> [Access date not recorded].

South African Tourism, s.a. Alexandra Heritage Precinct — historic and iconic. [online] Available at: <https://www.southafrica.net/za/en/travel/article/alexandra-heritage-precinct-historic-and-iconic> [Access date not recorded].

Wikipedia contributors, s.a. Alexandra, South Africa. [online] Available at: <https://en.wikipedia.org/wiki/Alexandra,_South_Africa> [Access date not recorded].

Sowetan, 2019. Waiting to exhale: the story of Alexandra township. [online] Available at: <https://www.sowetan.co.za/news/south-africa/2019-10-18-waiting-to-exhale-the-story-of-alexandra-township/> [Accessed 26 October 2026].

The Heritage Portal, s.a. Alexandra Heritage Centre — Alexandra Johannesburg. [online] Available at: <https://www.theheritageportal.co.za/thread/alexandra-heritage-centre-alexandra-johannesburg> [Accessed 28 October 2026].

OpenAI, 2026. Golden Road Through Alexandra Township. [AI-generated image] Available at: <https://chatgpt.com/share/6adf2764-30d4-83ea-a754-7bdf4fe1dd0c> [Access date not recorded].

Google, 2026. Gemini: September 1 conversation (earlier README identifies the provider as Alphabet Inc.). [online] Available at: <https://share.gemini.google/d2NUPZtkqrWn> [Access date not recorded].

OpenAI, 2026. ChatGPT: September 1 conversation. [online] Available at: <https://chatgpt.com/share/6a9728af-56c8-83ea-84d2-4549ec4f6a8b> [Access date not recorded].

MDN Web Docs, s.a. HTMLInputElement: checkValidity() method. [online] Available at: <https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/checkValidity> [Accessed 25 October 2026].

Leaflet, s.a. Leaflet: an open-source JavaScript library for interactive maps. [online] Available at: <https://leafletjs.com/> [Access date not recorded].

OpenStreetMap contributors, s.a. Copyright and licence. [online] Available at: <https://www.openstreetmap.org/copyright> [Access date not recorded].

Formspree, s.a. Formspree: form submission service. [online] Available at: <https://formspree.io/> [Access date not recorded].

Google Search Central, s.a. Get started with SEO: a developer’s guide. [online] Available at: <https://developers.google.com/search/docs/fundamentals/get-started-developers> [Accessed 8 November 2026].

Google Search Central, s.a. Build and submit a sitemap. [online] Available at: <https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap> [Accessed 8 November 2026].

Google, s.a. Robots.txt specifications. [online] Available at: <https://developers.google.com/crawling/docs/robots-txt/robots-txt-spec> [Accessed 8 November 2026].

Google Search Central, s.a. Search Engine Optimization Starter Guide. [online] Available at: <https://developers.google.com/search/docs/fundamentals/seo-starter-guide> [Accessed 8 November 2026].

Google Search Central, s.a. Spam policies for Google web search. [online] Available at: <https://developers.google.com/search/docs/essentials/spam-policies> [Accessed 8 November 2026].

MDN Web Docs, s.a. prefers-reduced-motion. [online] Available at: <https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion> [Accessed 8 November 2026].

MDN Web Docs, s.a. The image embed element. [online] Available at: <https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/img> [Accessed 8 November 2026].

MDN Web Docs, s.a. Multimedia: Images. [online] Available at: <https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Performance/Multimedia> [Accessed 8 November 2026].

### Checked teaching-code sources

The HTML teaching example was confirmed at the originally recorded August revision. The four CSS examples do not exist at that revision; their last file-specific September revision is cited below. The earlier source attribution is retained with corrected, verifiable version URLs.

Sookha, J., 2026. 22-css-float-layout.html (Version fb4641a087038d398595eb046150b4ccb56421b0). [Source code] Available at: <https://github.com/jesselsookha/WEDE2026/blob/fb4641a087038d398595eb046150b4ccb56421b0/code/css/22-css-float-layout.html> [Accessed 9 November 2026].

Sookha, J., 2026. 21-css-visualize-box-model.html (Version fb4641a087038d398595eb046150b4ccb56421b0). [Source code] Available at: <https://github.com/jesselsookha/WEDE2026/blob/fb4641a087038d398595eb046150b4ccb56421b0/code/css/21-css-visualize-box-model.html> [Accessed 9 November 2026].

Sookha, J., 2026. 20-css-pseudo-classes1.html (Version fb4641a087038d398595eb046150b4ccb56421b0). [Source code] Available at: <https://github.com/jesselsookha/WEDE2026/blob/fb4641a087038d398595eb046150b4ccb56421b0/code/css/20-css-pseudo-classes1.html> [Accessed 9 November 2026].

Sookha, J., 2026. 15-css-selector-matching.html (Version fb4641a087038d398595eb046150b4ccb56421b0). [Source code] Available at: <https://github.com/jesselsookha/WEDE2026/blob/fb4641a087038d398595eb046150b4ccb56421b0/code/css/15-css-selector-matching.html> [Accessed 9 November 2026].

Sookha, J., 2026. 01-html-tags-only.html (Version 955dfb5b951fcb479b0b4899f41052fe95cedbb3). [Source code] Available at: <https://github.com/jesselsookha/WEDE2026/blob/955dfb5b951fcb479b0b4899f41052fe95cedbb3/code/html/01-html-tags-only.html> [Accessed 9 November 2026].

OpenAI, 2026. Draw African Cartoons. [AI-assisted conversation, ChatGPT] Available at: <https://chatgpt.com/share/6ac43037-cc6c-83ea-9ecd-24056a4a94d4> [Accessed 6 October 2026; student-recorded attribution retained from the original stylesheet, shared contents not independently verified]. The model-version claim in the previous stylesheet has been omitted because it could not be established.

### Validation of this reference update

All five CSS syntax trees retain their selectors, declaration values, media conditions and ordering, ignoring comments and formatting. All eight JavaScript files parse. The twenty gallery IDs, titles, image paths, dimensions and categories are unchanged. Static captions match the data after normalising HTML whitespace. The twelve pages have unique IDs and valid local fragment targets. A DOM simulation passed all five gallery theme counts, search, no-results feedback, reset, alphabetical ordering, GLightbox opening and focus return. Archive filtering and invalid-form feedback passed without sending external requests. Browser rendering, deployment and live form delivery were not tested by this code-only update.

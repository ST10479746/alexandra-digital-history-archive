# Alexandra Digital History Archive

**Module:** WEDE5020 — Web Development (Introduction)  
**Student:** Mkateki Mashimbye — ST10479746

## Purpose

MyAlexandra.co.za aims to document the historical events that happened in Alexandra since its founding in 1912 until as of currently. We want to tell a compelling story that captures the history of Alexandra in full lense.

## Mission

To showcase Alexandra’s rich history by providing information that is reliable, credible and accurate.

## Vision

MyAlexandra.co.za aims to grow and become a continental website which showcase Africa history through a visual, textual and auditory lense.

## Values

Our biggest values are our people and their history. The organisation places importance in ensuring that the people of Alexandra and their stories are well documented.

## Our Team

Mkateki Mashimbye - CEO



## Website Goals

* Display historical information through recorded interviews, documentaries, and photos.
* Provide access to journal articles, reports, books, diaries, and letters.
* Design an interactive yet functional website that offers numerous content.
* Provide a platform for user connection and feedback
* Digitally map out Alexandra's history through streets, roads, and buildings.
* Develop a timeline that shows Alexandra's from founding year to present date.

## Website Objectives

* Develop test and successfully run the following features in website:
* 

  * Videoplay in website
* 

  * Digital map of Alexandra
* Sort and categorise data by:
* 

  * Significant events:
* 

  * 1912 - Formation of Alexandra
* 

  * 1948 - Start of Apartheid
* 

  * 1976 - June 16 Uprising
* 

  * 1994 - New Dawn of South Africa
* 

  * Timeline
* 

  * Digital Map
* 

  * Regularly track user's activities for improvements and updates



## Key Features and Functionality

* Storytelling through documentaries, books, journal articles and photos.
* Digital mapping and GIS system integration of Alexandra.
* Data categorized by significant events (e.g., 1912 Formation, 1976 Uprising) and timeline.

## Timeline and Milestones

* 01 August - 01 September 2026: Developing HTML structure for website + Design of sitemap and UI/ UX Design
* 05 October 2026: Complete CSS styling for Part 2.
* 09 November 2026: Final JavaScript functionality and deployment for Part 3.

## Part 1 Details

This submission covers Part 1 of the POE, which includes project initiation, content research, file organization, basic HTML structure across 5 interconnected pages, and initial GitHub repository setup. Part 2 and Part 3 will follow in future submissions/edits.

## Sitemap

* Home (index.html)
* About Us (about.html)
* Content Archive (content.html)
* Enquiry (enquiry.html)
* Contact (contact.html)

## Changelog

* v1.0.0 (01 September 2026): Initial commit with file structure, basic HTML boilerplate, and navigation links.
* v1.1.0 (03 October 2026) - Part 1 Feedback Corrections:

  * Historical entry corrected: this project belongs to WEDE5020, not XHAW5112.
  * Renamed `content.html` to `services.html` to align strictly with the project brief requirements.
  * Updated all `<nav>` and `<footer>` hyperlink references across all HTML files to point to `services.html` instead of `content.html`.
  * Updated the Sitemap in README.md to reflect the new file name.



## References

* South African History Online. 2025, Alexandra, Township in Johannesburg. Available at: https://sahistory.org.za/place/alexandra-township-johannesburg
* South African Tourism. 2026, Alexandra Heritage Precinct - historic and iconic. Available at: https://www.southafrica.net/za/en/travel/article/alexandra-heritage-precinct-historic-and-iconic
* Wikipedia. 2026, Alexandra, South Africa. Available at: https://en.wikipedia.org/wiki/Alexandra,\_South\_Africa
* City of Johannesburg. 2018, Why Alexandra survived apartheid. Available at: https://joburg.org.za/play\_/Pages/Play%20in%20Joburg/Culture%20and%20Heritage/Links/Why-Alexandra-survived-apartheid.aspx
* Alphabet Inc.(2026). Gemini (Sept 01 version) \[Large language model]. https://share.gemini.google/d2NUPZtkqrWn
* OpenAI. (2026). Chatgpt (Sept 01 version) \[Large language model]. https://chatgpt.com/share/6a9728af-56c8-83ea-84d2-4549ec4f6a8b

## Part 2 Details: Designing the Visuals

* **External CSS:** Implemented a centralized `style.css` file linked across all five HTML pages to ensure absolute design consistency and enforce a separation of structure and presentation.
* **Typography \& Base Styles:** Established a base typographic scale using Aptos and sans-serif fallbacks, with customized line heights (`1.6`) to maximize readability for historical text blocks.
* **Layout Structure:** Utilized CSS Flexbox extensively to create structured horizontal navigation, wrap-enabled multi-column grids for content cards, and meticulously centered form layouts.
* **Visual Styles:** Applied a cohesive dark terracotta, gold, and silver color scheme to reflect the heritage theme, utilizing interactive `:hover` pseudo-classes to provide visual feedback on interactive buttons and navigation links.
* **Responsive Design:** Integrated relative units (percentages) and media queries at the `768px` breakpoint to guarantee the navigation, hero section, and grids collapse gracefully into a single-column layout on mobile and tablet devices.

## Changelog

### Part 2 Updates \& Part 1 Feedback Corrections

* **Added:** `style.css` file to manage all visual styling globally across the archive.
* **Added:** Global base styles defining font family, primary colors, and structural resets (`box-sizing: border-box`).
* **Added:** Flexbox grid structures to `index.html`, `about.html`, `content.html`, `enquiry.html`, and `contact.html` to align content sections and precisely frame form inputs.
* **Added:** Media queries (`@media (max-width: 768px)`) to stack navigation links, scale down typography, and convert horizontal grids into single columns for mobile responsiveness.
* **Changed:** Replaced inline styles from the initial drafts with pure external CSS selectors for cleaner HTML formatting.
* **Changed:** Upgraded the "Type of Enquiry" form section to utilize a structured dropdown menu and formatted checkbox list to streamline user interaction.
* **Fixed (Part 1 Correction):** Reverted the previously named `services.html` file and its corresponding navigation links back to `content.html` across all pages to more accurately reflect the historical archival material.

### Part 3 — Part 2 Feedback Corrections

* Renamed the stylesheet folder from `CSS` to `css` to match the `css/style.css` links across all five HTML pages.
* Corrected the case mismatch identified in lecturer feedback, which could prevent styling from loading on case-sensitive hosting platforms.

## Updated References

* Sookha, J., 2026. 01-html-tags-only.html (Version 955dfb5b951fcb479b0b4899f41052fe95cedbb3) \[Source code] Available at: [https://github.com/jesselsookha/WEDE2026/commits/main/code/html](https://github.com/jesselsookha/WEDE2026/commits/main/code/html) \[Accessed 04 September 2026].
* Sookha, J., 2026. 22-css-float-layout.html (Version 955dfb5b951fcb479b0b4899f41052fe95cedbb3) \[Source code] Available at: [https://github.com/jesselsookha/WEDE2026/blob/main/code/css/22-css-float-layout.html](https://github.com/jesselsookha/WEDE2026/blob/main/code/css/22-css-float-layout.html) \[Accessed 04 September 2026].
* Sookha, J., 2026. css-visualize-box-model.html (Version 955dfb5b951fcb479b0b4899f41052fe95cedbb3) \[Source code] Available at: [https://github.com/jesselsookha/WEDE2026/blob/main/code/css/21-css-visualize-box-model.html](https://github.com/jesselsookha/WEDE2026/blob/main/code/css/21-css-visualize-box-model.html) \[Accessed 04 September 2026].
* Sookha, J., 2026. css-pseudo-classes1.html (Version 955dfb5b951fcb479b0b4899f41052fe95cedbb3) \[Source code] Available at: [https://github.com/jesselsookha/WEDE2026/blob/main/code/css/20-css-pseudo-classes1.html](https://github.com/jesselsookha/WEDE2026/blob/main/code/css/20-css-pseudo-classes1.html) \[Accessed 04 September 2026].
* Sookha, J., 2026. 15-css-selector-matching.html (Version 955dfb5b951fcb479b0b4899f41052fe95cedbb3) \[Source code] Available at: [https://github.com/jesselsookha/WEDE2026/blob/main/code/css/15-css-selector-matching.html](https://github.com/jesselsookha/WEDE2026/blob/main/code/css/15-css-selector-matching.html) \[Accessed 04 September 2026].



## Part 3 — Museum foundation (25 October 2026)

* Rebuilt Home with a black-and-gold editorial museum layout, past/present introduction, timeline themes, community previews and contribution routes.
* Added `css/museum.css` with shared design tokens, responsive Grid layouts, keyboard focus styles and reduced-motion support. Kept `css/style.css` for existing secondary-page layouts during staged migration.
* Applied shared header/footer to all five existing pages. Added progressively enhanced mobile navigation, native dropdowns, current-page indication and Escape-key dismissal in `js/main.js`.
* Corrected image references to the actual `IMAGES` folder for case-sensitive hosting.
* Removed old README conflict markers and unrelated profile-page introduction; corrected the module identification. Preserved prior references and the stylesheet-folder correction entry.
* Used existing media with explicit provenance limitations; final exhibit images and font assets remain to be supplied. System serif/sans-serif fonts provide a dependable offline foundation.
* Navigation targets only existing pages and Home sections. The seven additional exhibition pages, archive search, lightbox, map and form processing are scheduled for later stages and are not claimed complete.

### Part 3 — Archive Directory

* Redesigned content.html with the museum layout, accessible catalogue controls and responsive result rows.
* Added eight JavaScript-generated preview entries and working keyword search, theme filtering, title sorting, clear controls, result counts and a no-results state.
* Used textContent for generated text and supplied a non-JavaScript fallback.
* Linked preview entries to existing destinations while dedicated exhibition pages remain in development.
* Preserved lowercase images paths and the form-contrast/print corrections in museum.css.

### Part 3 — Alexandra Through Time

* Added timeline.html with five sourced historical milestones, era navigation and expandable context/source panels.
* Identified witness testimony and commemorative speeches by source type, with paraphrased summaries and external references.
* Added responsive timeline layouts and keyboard-accessible native disclosure controls.
* Connected the Archive Directory timeline entry to the new page.
* Reformatted the supplied HTML, CSS and archive JavaScript with explanatory comments for readability.
* Updated shared timeline navigation links after applying the documented link replacement.

### Part 3 — Timeline Sources

* The Presidency. 2012. Address by President Jacob Zuma at the event to mark the Centenary of Alexandra Township. 22 September. Available at: https://www.thepresidency.gov.za/address-president-jacob-zuma-event-mark-centenary-alexandra-township \[Accessed 25 October 2026].
* Phahle, R. 2019. The 1957 Alexandra Bus Boycott and its unsung heroes. June. South African History Online. Available at: https://sahistory.org.za/archive/1957-alexandra-bus-boycott-and-its-unsung-heroes-roseinnes-phahle-june-2019 \[Accessed 25 October 2026].
* Truth and Reconciliation Commission. 1996. Human Rights Violations hearing: Bennet Lekalakala. Alexandra, 29 October. Available at: https://www.justice.gov.za/trc/hrvtrans/alex/lekalaka.htm \[Accessed 25 October 2026].

### Part 3 — Places and Landmarks

* Added places.html with three sourced place records, an interactive Leaflet map, marker popups and a shared detail panel.
* Added search and category filters synchronising list entries and map markers, plus no-results and reset controls.
* Bundled Leaflet 1.9.4 and its BSD licence in vendor/leaflet; retained visible OpenStreetMap attribution.
* Provided native source disclosures and a text-list alternative if the map or street tiles are unavailable.
* Identified coordinates as approximate feature centres, separate from historical descriptions.
* Linked the archive place entry and shared navigation to places.html after applying the documented replacements.

### Part 3 — Gallery and Lightbox

- Added gallery.html with six captioned project images and explicit provenance labels.
- Added category filters and an image lightbox using the native dialog element.
- Implemented Previous/Next controls, arrow-key navigation, filtered-collection browsing, image-load error feedback and focus return after closing.
- Kept static image links available without JavaScript.
- Linked the archive image entry to the dedicated gallery. Shared navigation integration remains scheduled.
- Corrected lightbox centring where the original CSS margin reset
  overrode the dialog’s default positioning.

### Part 3 — Enquiry and Contact Forms

- Redesigned enquiry.html and contact.html with consistent museum layouts and persistent field labels.
- Added shared client-side validation with inline errors, error summaries and first-invalid-field focus.
- Added six enquiry categories, category-specific guidance and tailored responses covering relevant availability, permission and cost limitations.
- Compiled contact messages into reviewable text, with copy support and configurable email-draft links.
- Added configurable JSON POST submission with loading, HTTP/validation-error, timeout and retry handling. Live AJAX endpoint integration remains pending.
- Kept delivery states explicit: preparing a response or opening a draft does not mean an email was sent.
- Preserved the gallery centring correction in the supplied stylesheet.

### Part 3 — Form Implementation References

- MDN Web Docs. n.d. Using the Fetch API. Available at: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch [Accessed 25 October 2026].
- MDN Web Docs. n.d. HTMLInputElement: checkValidity() method. Available at: https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/checkValidity [Accessed 25 October 2026].

# About and Research update

Copy `about.html` and `research.html` into the project root. Copy `learning.css` into the existing `css` folder. The HTML files load it after `museum.css`.

This package does not replace `museum.css`, JavaScript, the README or email configuration. Keep the tested form changes and configured recipient.

About is reachable from existing navigation. Its header, footer and page content link to Research. Both new pages link back to the existing exhibitions. Full navigation across the remaining pages will be unified when those pages are complete.

## Local checks

* Open About and follow the Research links.
* Check the artwork and creator photograph load.
* Use the section links and expand the editorial/research notes with the keyboard.
* Check both pages at desktop, tablet and mobile widths; check for horizontal scrolling.
* Follow a source link and confirm it opens in a new tab.
* Recheck Contact and Enquiry: this update should leave their layout unchanged.

## Changelog entry to add to README

### 25 October 2026 — About and research reading room

* Redesigned About with the archive purpose, mission, vision, community values and black-and-gold design rationale.
* Added Research and Resources with four contextualised historical references, mapping credits and a research guide.
* Added responsive layouts and keyboard-operable native disclosure controls.
* Identified illustrative artwork and distinguished testimony, recollection and commemorative sources.
* Preserved the existing form stylesheet and email configuration.

## Reference records

The research page contains links and source-use notes. Retain the corresponding records under the README's References section, merging any duplicates already recorded:

* The Presidency (2012). Address by President Jacob Zuma at the event to mark the Centenary of Alexandra Township. 22 September. https://www.thepresidency.gov.za/address-president-jacob-zuma-event-mark-centenary-alexandra-township
* Phahle, R. (2019). The 1957 Alexandra Bus Boycott and its unsung heroes. South African History Online. June. https://sahistory.org.za/archive/1957-alexandra-bus-boycott-and-its-unsung-heroes-roseinnes-phahle-june-2019
* Truth and Reconciliation Commission (1996). Bennet Lekalakala: Alexandra hearing transcript. 29 October. https://www.justice.gov.za/trc/hrvtrans/alex/lekalaka.htm
* Peter Rich Architects (2018). Alexandra Heritage Centre. https://www.peterricharchitects.com/alexandra-heritage-centre
* Joburg Tourism Company (n.d.). Alexandra Stadium. https://visit.joburg/things-to-do/alexandra-stadium/ (directory fallback: https://visit.joburg/leisure/things-to-do/).
* Mapcarta (n.d.). Alexandra Heritage Centre; Mandela's Alexandra home; Alexandra Stadium. https://mapcarta.com/W794712819 ; https://mapcarta.com/W794712820 ; https://mapcarta.com/W1233252354 . Coordinate records, not historical narrative sources.
* OpenStreetMap contributors (n.d.). Copyright and licence. https://www.openstreetmap.org/copyright
* Leaflet (n.d.). Leaflet: an open-source JavaScript library for interactive maps. https://leafletjs.com/

Historical pages were consulted on 25 October 2026. The direct tourism listing timed out during this update; its official tourism directory was available. The coordinate and software links carry forward the existing Places page credits.

## Verification performed

Static HTML checks cover unique IDs, internal fragments, local asset destinations, page titles, viewport metadata and source-link safety attributes. CSS brace balance was checked. Browser appearance, viewport behaviour and keyboard operation need the local checks above; no browser rendering is claimed.



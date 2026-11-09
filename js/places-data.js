/*
places-data.js — Alexandra Digital History Archive

REFERENCE LIST

MDN Web Docs, 2026. Array. Updated Jul 28, 2026. [online] Available at: <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array> [Accessed 9 November 2026].

Peter Rich Architects, 2018. Alexandra Heritage Centre. Dated project account. [online] Available at: <https://www.peterricharchitects.com/alexandra-heritage-centre> [Accessed 9 November 2026].

Joburg Tourism Company, s.a. Alexandra Stadium. [online] Available at: <https://visit.joburg/things-to-do/alexandra-stadium/> [Accessed 9 November 2026].

Documentation supports the explanations, rather than claiming that project code was copied. Documentation has no fixed source-code version. Actual library versions are stated separately. Missing publication dates use s.a.; year suffix letters are omitted to follow the supplied course guide. Each citation names one source. Titles and nearby links identify individual works by the same author and year.
*/

"use strict";
// Locations are approximate feature centres from the linked OSM-based records.
// Historical descriptions use the separate primary sources attached to each place.

// -----------------------------------------------------------------------------
// 1. Place records
// -----------------------------------------------------------------------------
// MDN Web Docs (2026) explains that arrays keep related records together. The array
// keeps each place record together. Historical and location source URLs belong to the
// individual records; this technical reference does not verify their factual content.
const placesData = [
  {
    id: "heritage-centre",
    title: "Alexandra Heritage Centre",
    category: "heritage",
    lat: -26.10498,
    lng: 28.09303,
    summary:
      "A heritage building whose design connects exhibition space with the surrounding streets and community.",
    detail:
      "Peter Rich Architects describes an oral-history process involving residents, and a building that bridges the street. The design makes community memory part of its architectural story (Peter Rich Architects, 2018).",
    source: "https://www.peterricharchitects.com/alexandra-heritage-centre",
    sourceLabel: "Peter Rich Architects: project account",
    geo: "https://mapcarta.com/W794712819",
  },
  {
    id: "mandela-yard",
    title: "Mandela’s Alexandra home",
    category: "heritage",
    lat: -26.10468,
    lng: 28.09313,
    summary:
      "The Alexandra dwelling associated with Nelson Mandela’s early years in Johannesburg, close to the Heritage Centre.",
    detail:
      "The architect’s project account identifies Mandela’s Yard as a precinct containing a small dwelling where Mandela lived in 1942. This is the Alexandra site, not Mandela House in Soweto (Peter Rich Architects, 2018).",
    source: "https://www.peterricharchitects.com/alexandra-heritage-centre",
    sourceLabel: "Peter Rich Architects: Mandela’s Yard context",
    geo: "https://mapcarta.com/W794712820",
  },
  {
    id: "alexandra-stadium",
    title: "Alexandra Stadium",
    category: "sport",
    lat: -26.10541,
    lng: 28.09958,
    summary:
      "A sporting venue on 12th Avenue, linking this place collection to Alexandra’s football life.",
    detail:
      "Joburg Tourism identifies Alexandra Stadium as a sporting venue primarily used for football. This entry introduces the place; it does not provide a live fixture list or visitor-access information (Joburg Tourism Company, s.a.).",
    source: "https://visit.joburg/things-to-do/alexandra-stadium/",
    sourceLabel: "Joburg Tourism: stadium listing",
    geo: "https://mapcarta.com/W1233252354",
  },
];

// -----------------------------------------------------------------------------
// 2. Optional Node export
// -----------------------------------------------------------------------------
// The records can also be read by local verification scripts.
if (typeof module !== "undefined" && module.exports) {
  module.exports = placesData;
}

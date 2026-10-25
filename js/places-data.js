"use strict";
// Locations are approximate feature centres from the linked OSM-based records.
// Historical descriptions use the separate primary sources attached to each place.
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
      "Peter Rich Architects describes an oral-history process involving residents, and a building that bridges the street. The design makes community memory part of its architectural story.",
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
      "The architect’s project account identifies Mandela’s Yard as a precinct containing a small dwelling where Mandela lived in 1942. This is the Alexandra site, not Mandela House in Soweto.",
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
      "Joburg Tourism identifies Alexandra Stadium as a sporting venue primarily used for football. This entry introduces the place; it does not provide a live fixture list or visitor-access information.",
    source: "https://visit.joburg/things-to-do/alexandra-stadium/",
    sourceLabel: "Joburg Tourism: stadium listing",
    geo: "https://mapcarta.com/W1233252354",
  },
];
if (typeof module !== "undefined" && module.exports) {
  module.exports = placesData;
}

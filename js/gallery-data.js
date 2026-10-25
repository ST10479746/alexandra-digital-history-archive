"use strict";
// Each image keeps its caption and provenance together in a single record.
const galleryItems = [
  {
    id: "urban-view",
    title: "A view across the urban landscape",
    category: "photo",
    src: "images/historic-alexandra.jpg",
    alt: "A wide urban view showing rooftops, roads and parked vehicles",
    caption:
      "Image supplied with the original project. Its date, creator and exact viewpoint remain unverified.",
    credit: "Project-supplied image · creator credit pending",
    provenance:
      "Undated project image · not presented as a verified historical photograph",
  },
  {
    id: "community",
    title: "A community connected",
    category: "art",
    src: "images/community.png",
    alt: "Gold illustration representing people and community heritage",
    caption:
      "An illustrative interpretation of community connection. It does not depict identified historical residents.",
    credit: "Existing project artwork",
    provenance: "AI-generated illustration · not documentary evidence",
  },
  {
    id: "collections",
    title: "What we choose to keep",
    category: "art",
    src: "images/collections.png",
    alt: "Gold illustration of photographs inside an archive folder",
    caption:
      "A decorative archive motif representing the preservation of images and memories.",
    credit: "Existing project artwork",
    provenance: "AI-generated illustration · not an archival object",
  },
  {
    id: "timeline",
    title: "Time and memory",
    category: "art",
    src: "images/timeline.png",
    alt: "Gold timeline-themed illustration with architectural motifs",
    caption:
      "A decorative timeline emblem. Any dates or scenes inside the artwork are part of the illustration, not a historical source.",
    credit: "Existing project artwork",
    provenance: "AI-generated illustration · not historical evidence",
  },
  {
    id: "places",
    title: "Finding our place",
    category: "art",
    src: "images/Alexandra heritage map emblem.png",
    alt: "Gold emblem combining a location pin and an illustrated map",
    caption:
      "A visual symbol for exploring places and landmarks. The illustrated map is not geographic data.",
    credit: "Existing project artwork",
    provenance: "AI-generated illustration · not a geographic map",
  },
  {
    id: "heritage",
    title: "Heritage in caring hands",
    category: "art",
    src: "images/Alexandra heritage in caring hands.png",
    alt: "Gold illustration of hands holding a book and a stylised settlement",
    caption:
      "A symbolic image of caring for shared heritage. The buildings are illustrative, not a verified reconstruction.",
    credit: "Existing project artwork",
    provenance: "AI-generated illustration · not documentary evidence",
  },
];
if (typeof module !== "undefined" && module.exports) {
  module.exports = galleryItems;
}

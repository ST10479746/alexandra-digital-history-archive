"use strict";
// Catalogue entries connect the searchable directory to the available exhibitions.
const archiveEntries = [
  {
    id: "history",
    title: "Alexandra through time",
    category: "history",
    type: "Exhibition",
    description:
      "Explore the origins, changes and memories that guide our historical exhibition.",
    keywords: "timeline past beginnings history",
    href: "timeline.html",
    image: "images/timeline.png",
    alt: "An unpaved street blending into a paved road between homes, with muted tones on the left and golden evening light on the right",
    provenance: "AI-generated interpretation of infrastructure changing over time · not a verified historical reconstruction (OpenAI, 2026).",
  },
  {
    id: "present",
    title: "Alexandra today: past and present",
    category: "history",
    type: "Exhibition",
    description:
      "Consider the connections between Alexandra’s past and the community of today.",
    keywords: "today contemporary change continuity",
    href: "alexandra-today.html",
    image: "images/past-and-present.png",
    alt: "An open family album with a black-and-white portrait of parents and two children beside a colour portrait of the family in later life",
    provenance: "AI-generated family album illustrating generations over time · not an authentic family record (OpenAI, 2026).",
  },
  {
    id: "people",
    title: "People of Alexandra",
    category: "people",
    type: "Exhibition",
    description:
      "An introduction to the people and everyday contributions at the heart of the archive.",
    keywords: "figures residents biography lives",
    href: "people.html",
    image: "images/people.png",
    alt: "Different generations dancing in a street, wearing a mix of traditional attire and modern clothing in warm evening light",
    provenance: "AI-generated illustration · not documentary evidence (OpenAI, 2026).",
  },
  {
    id: "places",
    title: "Places that hold memory",
    category: "places",
    type: "Exhibition",
    description:
      "Follow the connections between streets, homes, landmarks and the people who give them meaning.",
    keywords: "map heritage buildings locations",
    href: "places.html",
    image: "images/alexandra-centre.png",
    alt: "An interpretation of the Alexandra Heritage Centre with red steel framing, pale brickwork and stone walls beside a sloping street",
    provenance: "AI-generated interpretation based on a Heritage Portal reference photograph · not a documentary photograph (OpenAI, 2026; The Heritage Portal, n.d.).",
  },
  {
    id: "voices",
    title: "Community voices",
    category: "community",
    type: "Exhibition",
    description:
      "Discover why personal memories and shared experiences belong in the archive.",
    keywords: "stories oral history audio memories people",
    href: "community-voices.html",
    image: "images/conversations.png",
    alt: "An older woman and a younger man talking together at the doorway of a brick home",
    provenance: "AI-generated conversation scene · not recorded testimony (OpenAI, 2026).",
  },
  {
    id: "view",
    title: "Alexandra in view",
    category: "images",
    type: "Visual collection",
    description:
      "Browse the starter image collection, with a lightbox, captions and clear provenance notes.",
    keywords: "photograph gallery visual city landscape",
    href: "gallery.html",
    image: "images/viewpoint.png",
    alt: "An elevated view of Alexandra-inspired rooftops and parked vehicles in golden evening light",
    provenance: "AI-generated illustration · not documentary evidence (OpenAI, 2026).",
  },
  {
    id: "collections",
    title: "What we choose to keep",
    category: "community",
    type: "Collection theme",
    description:
      "Explore the role of photographs, documents and personal memories in preserving a community’s story.",
    keywords: "collections documents books letters archive",
    href: "community-voices.html",
    image: "images/the-archive.png",
    alt: "Older and younger hands holding a family photograph above a wooden table with other prints",
    provenance: "AI-generated memory-sharing scene · not an authenticated archival photograph (OpenAI, 2026).",
  },
  {
    id: "contribute",
    title: "Keep the story alive",
    category: "community",
    type: "Contribution route",
    description:
      "Ask about research, partnerships or possible material you would like to contribute.",
    keywords: "enquiry volunteer sponsorship research contribution",
    href: "enquiry.html",
    image: "images/documenting.png",
    alt: "Three community members sorting photographs around a scanner and laptop at a shared table",
    provenance: "AI-generated community archive scene · no actual partnership implied (OpenAI, 2026).",
  },
];
function selectArchiveEntries(
  entries,
  query = "",
  category = "all",
  sort = "curated",
) {
  const words = query
    .trim()
    .toLocaleLowerCase("en")
    .split(/\s+/)
    .filter(Boolean);
  const matches = entries.filter((entry) => {
    const text = [
      entry.title,
      entry.description,
      entry.keywords,
      entry.category,
      entry.type,
    ]
      .join(" ")
      .toLocaleLowerCase("en");
    return (
      (category === "all" || entry.category === category) &&
      words.every((word) => text.includes(word))
    );
  });
  if (sort === "az" || sort === "za")
    matches.sort(
      (a, b) => (sort === "az" ? 1 : -1) * a.title.localeCompare(b.title, "en"),
    );
  return matches;
}
if (typeof module !== "undefined" && module.exports)
  module.exports = { archiveEntries, selectArchiveEntries };
if (typeof document !== "undefined") {
  const results = document.getElementById("archive-results");
  if (results) {
    const query = document.getElementById("archive-query");
    const sort = document.getElementById("archive-sort");
    const filters = [...document.querySelectorAll("#archive-filters button")];
    const count = document.getElementById("archive-count");
    const empty = document.getElementById("archive-empty");
    let category = "all";
    const make = (tag, className, text) => {
      const node = document.createElement(tag);
      if (className) node.className = className;
      if (text) node.textContent = text;
      return node;
    };
    function render() {
      const matches = selectArchiveEntries(
        archiveEntries,
        query.value,
        category,
        sort.value,
      );
      const fragment = document.createDocumentFragment();
      matches.forEach((entry) => {
        const article = make("article", "archive-entry");
        const figure = make("figure", "archive-thumbnail");
        const image = make("img");
        image.src = entry.image;
        image.alt = entry.alt;
        image.loading = "lazy";
        image.width = 240;
        image.height = 180;
        figure.append(image);
        const body = make("div", "archive-entry-body");
        body.append(make("p", "eyebrow", entry.type + " / " + entry.category));
        const heading = make("h3");
        const link = make("a", null, entry.title);
        link.href = entry.href;
        heading.append(link);
        body.append(
          heading,
          make("p", null, entry.description),
        );
        article.append(figure, body);
        fragment.append(article);
      });
      results.replaceChildren(fragment);
      empty.hidden = matches.length !== 0;
      count.textContent =
        matches.length +
        " " +
        (matches.length === 1 ? "entry" : "entries") +
        (category !== "all" ? " in " + category : "") +
        (query.value.trim() ? " matching “" + query.value.trim() + "”" : "");
    }
    document
      .getElementById("archive-search")
      .addEventListener("submit", (event) => {
        event.preventDefault();
        render();
      });
    query.addEventListener("input", render);
    sort.addEventListener("change", render);
    filters.forEach((button) =>
      button.addEventListener("click", () => {
        category = button.dataset.category;
        filters.forEach((item) =>
          item.setAttribute("aria-pressed", String(item === button)),
        );
        render();
      }),
    );
    document.getElementById("archive-reset").addEventListener("click", () => {
      query.value = "";
      category = "all";
      sort.value = "curated";
      filters.forEach((button) =>
        button.setAttribute(
          "aria-pressed",
          String(button.dataset.category === "all"),
        ),
      );
      render();
      query.focus();
    });
    render();
  }
}

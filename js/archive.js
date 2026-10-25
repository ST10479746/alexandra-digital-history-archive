"use strict";
// Catalogue previews link to real existing destinations during the staged redesign.
const archiveEntries = [
  {
    id: "history",
    title: "Alexandra through time",
    category: "history",
    type: "Exhibition preview",
    description:
      "Explore the origins, changes and memories that guide our historical exhibition.",
    keywords: "timeline past beginnings history",
    href: "timeline.html",
    image: "images/timeline.png",
    alt: "Decorative gold timeline medallion",
    provenance: "Illustrative artwork · not historical evidence",
  },
  {
    id: "present",
    title: "Past and present",
    category: "history",
    type: "Exhibition preview",
    description:
      "Consider the connections between Alexandra’s past and the community of today.",
    keywords: "today contemporary change continuity",
    href: "index.html#past-present",
    image: "images/historic-alexandra.jpg",
    alt: "Urban view supplied with the original project",
    provenance: "Project image · date and creator credit unverified",
  },
  {
    id: "people",
    title: "People of Alexandra",
    category: "people",
    type: "Exhibition preview",
    description:
      "An introduction to the people and everyday contributions at the heart of the archive.",
    keywords: "figures residents biography lives",
    href: "index.html#people",
    image: "images/community.png",
    alt: "Decorative gold community medallion",
    provenance: "Illustrative artwork · not historical evidence",
  },
  {
    id: "places",
    title: "Places that hold memory",
    category: "places",
    type: "Exhibition preview",
    description:
      "Follow the connections between streets, homes, landmarks and the people who give them meaning.",
    keywords: "map heritage buildings locations",
    href: "index.html#places",
    image: "images/Alexandra heritage map emblem.png",
    alt: "Decorative gold heritage-map emblem",
    provenance: "Illustrative artwork · not a geographic map",
  },
  {
    id: "voices",
    title: "Community voices",
    category: "community",
    type: "Exhibition preview",
    description:
      "Discover why personal memories and shared experiences belong in the archive.",
    keywords: "stories oral history audio memories people",
    href: "index.html#people",
    image: "images/community.png",
    alt: "Decorative gold community illustration",
    provenance: "Illustrative artwork · no recorded testimony supplied",
  },
  {
    id: "view",
    title: "Alexandra in view",
    category: "images",
    type: "Image preview",
    description:
      "Look at the urban landscape image included in the original project. Its date and creator remain to be verified.",
    keywords: "photograph gallery visual city landscape",
    href: "index.html#past-present",
    image: "images/historic-alexandra.jpg",
    alt: "Wide urban landscape from the project collection",
    provenance: "Project image · date and creator credit unverified",
  },
  {
    id: "collections",
    title: "What we choose to keep",
    category: "community",
    type: "Collection theme",
    description:
      "Explore the role of photographs, documents and personal memories in preserving a community’s story.",
    keywords: "collections documents books letters archive",
    href: "index.html#people",
    image: "images/collections.png",
    alt: "Decorative gold archive collection medallion",
    provenance: "Illustrative artwork · not an archival object",
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
    image: "images/Golden Handshake Heritage Medallion.png",
    alt: "Decorative gold handshake illustration",
    provenance: "Illustrative artwork · no partnership implied",
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
          make("p", "archive-provenance", entry.provenance),
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

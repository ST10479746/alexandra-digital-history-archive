"use strict";

// A search narrows the selected theme; sorting changes order without changing matches.
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

if (typeof module !== "undefined" && module.exports) {
  module.exports = { selectGalleryItems };
}

if (typeof document !== "undefined" && typeof galleryItems !== "undefined") {
  const grid = document.getElementById("gallery-grid");
  if (grid) {
    const query = document.getElementById("gallery-query");
    const sort = document.getElementById("gallery-sort");
    const filters = [...document.querySelectorAll("#gallery-filters button")];
    const count = document.getElementById("gallery-count");
    const status = document.getElementById("gallery-lightbox-status");
    const empty = document.getElementById("gallery-empty");
    const cards = new Map([...grid.querySelectorAll(".gallery-item")]
      .map((card) => [card.dataset.galleryId, card]));
    let category = "all";
    let visibleItems = [...galleryItems];
    let trigger = null;
    let viewer = null;

    // The library accepts caption HTML; escaping keeps project text as literal text.
    const escapeHTML = (value) => String(value).replace(/[&<>"']/g, (character) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
    })[character]);

    function slides() {
      return visibleItems.map((item) => ({
        href: item.src,
        type: "image",
        alt: item.alt,
        title: escapeHTML(item.title),
        description: `<p>${escapeHTML(item.caption)}</p>` +
          `<p>${escapeHTML(item.provenance)}</p>` +
          `<p>${escapeHTML(item.credit)}</p>` +
          `<p><a href="${escapeHTML(item.src)}" target="_blank" rel="noopener noreferrer">Open larger image ↗</a></p>`,
      }));
    }

    if (typeof GLightbox === "function") {
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

      viewer.on("open", () => {
        const modal = document.querySelector(".glightbox-container");
        if (!modal) return;
        // Keep the library skin and add museum colours without removing its control styles.
        modal.classList.add("glightbox-museum");
        modal.setAttribute("role", "dialog");
        modal.setAttribute("aria-modal", "true");
        modal.setAttribute("aria-label", "Alexandra gallery image viewer");
        const close = modal.querySelector(".gclose");
        if (close) close.focus();
        // Tab stays within visible lightbox controls, including its image link.
        modal.addEventListener("keydown", (event) => {
          if (event.key !== "Tab") return;
          const controls = [...modal.querySelectorAll('button, a[href], [tabindex="0"]')]
            .filter((node) => !node.disabled && node.getAttribute("aria-hidden") !== "true" && node.getClientRects().length);
          const first = controls[0];
          const last = controls[controls.length - 1];
          if (!first) return;
          if (event.shiftKey && (document.activeElement === first || !modal.contains(document.activeElement))) {
            event.preventDefault();
            last.focus();
          } else if (!event.shiftKey && (document.activeElement === last || !modal.contains(document.activeElement))) {
            event.preventDefault();
            first.focus();
          }
        });
      });
      viewer.on("close", () => {
        if (trigger && trigger.isConnected) trigger.focus({ preventScroll: true });
      });
    } else {
      status.textContent = "The enlarged viewer is unavailable. Image links still open the larger files.";
      status.hidden = false;
    }

    function render() {
      visibleItems = selectGalleryItems(galleryItems, query.value, category, sort.value);
      const ids = new Set(visibleItems.map((item) => item.id));
      cards.forEach((card, id) => { card.hidden = !ids.has(id); });
      // Moving existing cards preserves their links, labels and loading behaviour.
      visibleItems.forEach((item) => grid.append(cards.get(item.id)));
      filters.forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.category === category)));
      const label = filters.find((button) => button.dataset.category === category).textContent.trim();
      count.textContent = `${visibleItems.length} of ${galleryItems.length} images` +
        (category === "all" ? "" : ` in ${label}`) +
        (query.value.trim() ? ` matching “${query.value.trim()}”` : "");
      empty.hidden = visibleItems.length !== 0;
      if (viewer) viewer.setElements(slides());
    }

    document.getElementById("gallery-controls").hidden = false;
    document.getElementById("gallery-search").addEventListener("submit", (event) => {
      event.preventDefault();
      render();
    });
    query.addEventListener("input", render);
    sort.addEventListener("change", render);
    filters.forEach((button) => button.addEventListener("click", () => {
      category = button.dataset.category;
      render();
    }));
    document.getElementById("gallery-reset").addEventListener("click", () => {
      query.value = "";
      category = "all";
      sort.value = "curated";
      render();
      query.focus();
    });
    grid.addEventListener("click", (event) => {
      const link = event.target.closest(".gallery-open");
      if (!link || !grid.contains(link) || !viewer || event.button !== 0 ||
          event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      const index = visibleItems.findIndex((item) => item.id === link.dataset.galleryId);
      if (index < 0) return;
      event.preventDefault();
      trigger = link;
      viewer.openAt(index);
    });
    grid.querySelectorAll("img").forEach((image) => {
      image.addEventListener("error", () => {
        const card = image.closest(".gallery-item");
        if (card.querySelector(".gallery-load-error")) return;
        const message = document.createElement("p");
        message.className = "gallery-load-error";
        message.textContent = "Preview unavailable. Use the image link to try the larger file.";
        card.append(message);
      });
    });
    render();
  }
}

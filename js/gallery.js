"use strict";

// Index wrapping keeps next/previous navigation inside the visible collection.
function wrapGalleryIndex(index, length) {
  return length > 0 ? ((index % length) + length) % length : -1;
}

function filterGalleryItems(items, category = "all") {
  return items.filter(
    (item) => category === "all" || item.category === category,
  );
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { wrapGalleryIndex, filterGalleryItems };
}

if (typeof document !== "undefined" && typeof galleryItems !== "undefined") {
  const dialog = document.getElementById("gallery-lightbox");
  if (dialog) {
    const cards = [...document.querySelectorAll(".gallery-item")];
    const filters = [...document.querySelectorAll("#gallery-filters button")];
    const links = [...document.querySelectorAll(".gallery-open")];
    const image = document.getElementById("lightbox-image");
    const error = document.getElementById("lightbox-error");
    const previous = document.getElementById("lightbox-previous");
    const next = document.getElementById("lightbox-next");
    let visibleItems = [...galleryItems];
    let selectedIndex = 0;
    let trigger = null;

    document.getElementById("gallery-filters").hidden = false;

    // Captions are plain text, preventing metadata from being interpreted as markup.
    function showImage(index) {
      selectedIndex = wrapGalleryIndex(index, visibleItems.length);
      if (selectedIndex < 0) return;
      const item = visibleItems[selectedIndex];
      error.hidden = true;
      image.hidden = false;
      image.alt = item.alt;
      image.src = item.src;
      document.getElementById("lightbox-title").textContent = item.title;
      document.getElementById("lightbox-caption").textContent = item.caption;
      document.getElementById("lightbox-provenance").textContent =
        item.provenance;
      document.getElementById("lightbox-credit").textContent = item.credit;
      document.getElementById("lightbox-count").textContent =
        `Image ${selectedIndex + 1} of ${visibleItems.length}`;
      document.getElementById("lightbox-original").href = item.src;
      previous.disabled = visibleItems.length < 2;
      next.disabled = visibleItems.length < 2;
    }

    image.addEventListener("error", () => {
      image.hidden = true;
      error.hidden = false;
    });
    image.addEventListener("load", () => {
      image.hidden = false;
      error.hidden = true;
    });

    filters.forEach((button) =>
      button.addEventListener("click", () => {
        visibleItems = filterGalleryItems(
          galleryItems,
          button.dataset.category,
        );
        const ids = new Set(visibleItems.map((item) => item.id));
        cards.forEach((card) => {
          card.hidden = !ids.has(card.dataset.galleryId);
        });
        filters.forEach((item) =>
          item.setAttribute("aria-pressed", String(item === button)),
        );
        document.getElementById("gallery-count").textContent =
          `${visibleItems.length} ${visibleItems.length === 1 ? "image" : "images"} in this collection`;
      }),
    );

    links.forEach((link) =>
      link.addEventListener("click", (event) => {
        // Modified clicks and unsupported browsers retain the normal image-link behaviour.
        if (
          event.ctrlKey ||
          event.metaKey ||
          event.shiftKey ||
          event.altKey ||
          typeof dialog.showModal !== "function"
        )
          return;
        const index = visibleItems.findIndex(
          (item) => item.id === link.dataset.galleryId,
        );
        if (index < 0) return;
        event.preventDefault();
        trigger = link;
        showImage(index);
        dialog.showModal();
        document.body.classList.add("lightbox-active");
      }),
    );

    previous.addEventListener("click", () => showImage(selectedIndex - 1));
    next.addEventListener("click", () => showImage(selectedIndex + 1));
    document
      .getElementById("lightbox-close")
      .addEventListener("click", () => dialog.close());

    // Escape uses the dialog's native cancellation behaviour; arrow keys browse images.
    dialog.addEventListener("keydown", (event) => {
      if (!dialog.open) return;
      if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
        event.preventDefault();
        showImage(selectedIndex + (event.key === "ArrowLeft" ? -1 : 1));
      }
    });

    // A click outside the dialog rectangle closes the lightbox without affecting its content.
    dialog.addEventListener("click", (event) => {
      if (event.target !== dialog) return;
      const rect = dialog.getBoundingClientRect();
      if (
        event.clientX < rect.left ||
        event.clientX > rect.right ||
        event.clientY < rect.top ||
        event.clientY > rect.bottom
      )
        dialog.close();
    });

    // Closing restores page scrolling and returns keyboard focus to the selected thumbnail.
    dialog.addEventListener("close", () => {
      document.body.classList.remove("lightbox-active");
      if (trigger && trigger.isConnected)
        trigger.focus({ preventScroll: true });
    });
  }
}

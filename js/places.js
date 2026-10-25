"use strict";

// The same matching function determines which list records and markers are visible.
function filterPlaces(records, query = "", category = "all") {
  const words = query
    .trim()
    .toLocaleLowerCase("en")
    .split(/\s+/)
    .filter(Boolean);
  return records.filter((place) => {
    const text = [place.title, place.category, place.summary, place.detail]
      .join(" ")
      .toLocaleLowerCase("en");
    return (
      (category === "all" || category === place.category) &&
      words.every((word) => text.includes(word))
    );
  });
}

// Exporting the pure filter supports checks without requiring a browser or map.
if (typeof module !== "undefined" && module.exports) {
  module.exports = { filterPlaces };
}

if (typeof document !== "undefined" && typeof placesData !== "undefined") {
  const mapElement = document.getElementById("places-map");
  if (mapElement) {
    const query = document.getElementById("places-query");
    const count = document.getElementById("places-count");
    const reset = document.getElementById("places-reset");
    const status = document.getElementById("map-status");
    const detail = document.getElementById("place-detail");
    const cards = [...document.querySelectorAll(".place-card")];
    const buttons = [...document.querySelectorAll(".select-place")];
    const filters = [...document.querySelectorAll(".place-filters button")];
    let category = "all";
    let selectedId = null;
    let map = null;
    let markerLayer = null;
    let visiblePlaces = [...placesData];
    const markers = new Map();

    document.getElementById("places-controls").hidden = false;
    reset.hidden = false;
    buttons.forEach((button) => {
      button.hidden = false;
    });

    // Detail text is assigned as textContent, so it is never interpreted as HTML.
    function selectPlace(place, moveFocus = false) {
      selectedId = place.id;
      detail.hidden = false;
      document.getElementById("place-detail-category").textContent =
        place.category;
      const title = document.getElementById("place-detail-title");
      title.textContent = place.title;
      document.getElementById("place-detail-copy").textContent = place.detail;
      document.getElementById("place-detail-coordinates").textContent =
        `Approximate feature centre: ${place.lat}, ${place.lng}. Not a confirmed entrance.`;
      const source = document.getElementById("place-detail-source");
      source.textContent = place.sourceLabel + " ↗";
      source.href = place.source;
      document.getElementById("place-detail-geo").href = place.geo;
      document.getElementById("place-detail-osm").href =
        `https://www.openstreetmap.org/?mlat=${place.lat}&mlon=${place.lng}#map=18/${place.lat}/${place.lng}`;
      buttons.forEach((button) => {
        button.setAttribute(
          "aria-pressed",
          String(button.dataset.placeId === place.id),
        );
      });
      if (map) {
        map.setView([place.lat, place.lng], 18, { animate: false });
        markers.get(place.id).openPopup();
      }
      // List selection moves focus to its result; marker selection preserves map focus.
      if (moveFocus) {
        title.focus();
        detail.scrollIntoView({ block: "start", behavior: "auto" });
      }
    }

    function fitVisiblePlaces() {
      if (!map || !visiblePlaces.length) return;
      map.fitBounds(
        visiblePlaces.map((place) => [place.lat, place.lng]),
        {
          padding: [35, 35],
          maxZoom: 17,
          animate: false,
        },
      );
    }

    // Native disclosure cards remain usable if the library or tiles are unavailable.
    if (typeof L !== "undefined") {
      try {
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
        let loaded = false;
        tiles.on("tileload", () => {
          loaded = true;
          status.textContent =
            "Select a marker or a place-list button to explore its details.";
        });
        tiles.on("tileerror", () => {
          status.textContent =
            "Some map tiles could not load. Markers and the place list remain available; check your connection or reload the page.";
        });
        window.setTimeout(() => {
          if (!loaded)
            status.textContent =
              "Street-map tiles have not loaded. The place list and source links remain available. Check your connection or reload.";
        }, 12000);
        placesData.forEach((place) => {
          // Circle markers avoid dependencies on remote pin images.
          const marker = L.circleMarker([place.lat, place.lng], {
            radius: 11,
            color: "#0b0b0b",
            weight: 2,
            fillColor: "#c9a45c",
            fillOpacity: 1,
          });
          const popup = document.createElement("div");
          const heading = document.createElement("strong");
          heading.textContent = place.title;
          const note = document.createElement("p");
          note.textContent =
            "Approximate mapped location. Details appear below the map and list.";
          popup.append(heading, note);
          marker.bindPopup(popup);
          marker.on("click", () => selectPlace(place));
          markers.set(place.id, marker);
          marker.addTo(markerLayer);
        });
        fitVisiblePlaces();
      } catch (error) {
        if (map) map.remove();
        map = null;
        status.textContent =
          "The map could not initialise. Use the place list and source links below.";
      }
    } else {
      status.textContent =
        "The map library could not load. Use the place list and source links below.";
    }

    function render() {
      visiblePlaces = filterPlaces(placesData, query.value, category);
      const ids = new Set(visiblePlaces.map((place) => place.id));
      cards.forEach((card) => {
        card.hidden = !ids.has(card.dataset.placeId);
      });
      document.getElementById("places-empty").hidden =
        visiblePlaces.length !== 0;
      count.textContent = `${visiblePlaces.length} ${visiblePlaces.length === 1 ? "place" : "places"} found`;
      if (map) {
        map.closePopup();
        markerLayer.clearLayers();
        visiblePlaces.forEach((place) =>
          markers.get(place.id).addTo(markerLayer),
        );
        fitVisiblePlaces();
      }
      // Filtering out a selected place also removes its stale detail panel.
      if (selectedId && !ids.has(selectedId)) {
        selectedId = null;
        detail.hidden = true;
        buttons.forEach((button) =>
          button.setAttribute("aria-pressed", "false"),
        );
      }
    }

    document
      .getElementById("places-search")
      .addEventListener("submit", (event) => {
        event.preventDefault();
        render();
      });
    query.addEventListener("input", render);
    filters.forEach((button) =>
      button.addEventListener("click", () => {
        category = button.dataset.category;
        filters.forEach((item) =>
          item.setAttribute("aria-pressed", String(item === button)),
        );
        render();
      }),
    );
    buttons.forEach((button) =>
      button.addEventListener("click", () => {
        const place = placesData.find(
          (item) => item.id === button.dataset.placeId,
        );
        selectPlace(place, true);
      }),
    );
    reset.addEventListener("click", () => {
      query.value = "";
      category = "all";
      selectedId = null;
      detail.hidden = true;
      buttons.forEach((button) => button.setAttribute("aria-pressed", "false"));
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

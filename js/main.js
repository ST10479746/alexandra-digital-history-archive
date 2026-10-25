"use strict";
// Progressive enhancement: without JavaScript, navigation remains visible.
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".museum-nav");
if (menuButton && navigation) {
  menuButton.hidden = false;
  document.documentElement.classList.add("nav-enhanced");
  const closeMenu = () => menuButton.setAttribute("aria-expanded", "false");
  menuButton.addEventListener("click", () => {
    menuButton.setAttribute("aria-expanded", String(menuButton.getAttribute("aria-expanded") !== "true"));
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      navigation.querySelectorAll("details[open]").forEach(group => group.open = false);
      if (menuButton.getAttribute("aria-expanded") === "true") { closeMenu(); menuButton.focus(); }
    }
  });
  navigation.querySelectorAll("a").forEach(link => link.addEventListener("click", closeMenu));
  const current = location.pathname.split("/").pop() || "index.html";
  navigation.querySelectorAll("a").forEach(link => {
    if (link.getAttribute("href") === current) link.setAttribute("aria-current", "page");
  });
  navigation.querySelectorAll("details").forEach(group => {
    group.addEventListener("toggle", () => {
      if (group.open) navigation.querySelectorAll("details").forEach(other => { if (other !== group) other.open = false; });
    });
  });
  document.addEventListener("click", event => {
    if (!event.target.closest(".museum-header")) {
      closeMenu(); navigation.querySelectorAll("details").forEach(group => group.open = false);
    }
  });
}

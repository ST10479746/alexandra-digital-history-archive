/*
main.js — Alexandra Digital History Archive

REFERENCE LIST

MDN Web Docs, 2026. EventTarget: addEventListener() method. Updated Sep 30, 2026. [online] Available at: <https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener> [Accessed 9 November 2026].

MDN Web Docs, 2026. Intersection Observer API. Updated Sep 2, 2026. [online] Available at: <https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API> [Accessed 9 November 2026].

MDN Web Docs, 2025. Element: animate() method. Updated Dec 17, 2025. [online] Available at: <https://developer.mozilla.org/en-US/docs/Web/API/Element/animate> [Accessed 9 November 2026].

MDN Web Docs, 2026. Window: matchMedia() method. Updated Aug 21, 2026. [online] Available at: <https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia> [Accessed 9 November 2026].

Documentation supports the explanations, rather than claiming that project code was copied. Documentation has no fixed source-code version. Actual library versions are stated separately. Missing publication dates use s.a.; year suffix letters are omitted to follow the supplied course guide. Each citation names one source. Titles and nearby links identify individual works by the same author and year.
*/

"use strict";

// The full navigation remains visible when JavaScript is unavailable.

// -----------------------------------------------------------------------------
// 1. Navigation controls and initial state
// -----------------------------------------------------------------------------
// The controls are enhanced only when both required elements exist.
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".museum-nav");

if (menuButton && navigation) {
  const groups = [...navigation.querySelectorAll("details")];
  menuButton.hidden = false;
  document.documentElement.classList.add("nav-enhanced");

  // -----------------------------------------------------------------------------
  // 2. Menu closing helpers
  // -----------------------------------------------------------------------------
  // Closing the menu also closes its nested disclosures.
  const closeGroups = () => {
    groups.forEach((group) => {
      group.open = false;
    });
  };
  const closeMenu = () => {
    menuButton.setAttribute("aria-expanded", "false");
    closeGroups();
  };

  // -----------------------------------------------------------------------------
  // 3. Menu button behaviour
  // -----------------------------------------------------------------------------
  // MDN Web Docs (2026) explains that addEventListener() registers event handlers. The
  // click listener updates the expanded state.
  menuButton.addEventListener("click", () => {
    const expanded = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!expanded));
    if (expanded) closeGroups();
  });

  // A current-page link is also present in the HTML for visitors without scripts.

  // -----------------------------------------------------------------------------
  // 4. Current page and navigation links
  // -----------------------------------------------------------------------------
  // The path identifies the active link while clicks close the mobile menu.
  const currentPage = location.pathname.split("/").pop() || "index.html";
  navigation.querySelectorAll("a").forEach((link) => {
    link.removeAttribute("aria-current");
    if (
      link.getAttribute("href") === currentPage &&
      !link.classList.contains("nav-archive")
    ) {
      link.setAttribute("aria-current", "page");
    }
    link.addEventListener("click", closeMenu);
  });

  // -----------------------------------------------------------------------------
  // 5. Disclosure groups
  // -----------------------------------------------------------------------------
  // Opening one group closes the other groups; the current section stays identified.
  groups.forEach((group) => {
    group.classList.toggle(
      "nav-current-group",
      Boolean(group.querySelector('[aria-current="page"]')),
    );
    // Only one disclosure opens at a time; native details retains keyboard support.
    group.addEventListener("toggle", () => {
      if (group.open)
        groups.forEach((other) => {
          if (other !== group) other.open = false;
        });
    });
  });

  // -----------------------------------------------------------------------------
  // 6. Escape and outside-click handling
  // -----------------------------------------------------------------------------
  // Escape closes navigation and returns focus to an appropriate trigger.
  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    const openGroup = groups.find((group) => group.open);
    const menuExpanded = menuButton.getAttribute("aria-expanded") === "true";
    const focusWasInside = navigation.contains(document.activeElement);
    closeMenu();
    // Focus returns to a visible trigger when the closed menu held the keyboard focus.
    if (menuExpanded && (focusWasInside || document.activeElement === menuButton)) {
      menuButton.focus();
    } else if (openGroup && openGroup.contains(document.activeElement)) {
      openGroup.querySelector("summary").focus();
    }
  });

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".museum-header")) closeMenu();
  });
}

// Exhibition headings settle gently into place as visitors reach each section.
// The page remains visible before observation and when animation is unsupported.

// -----------------------------------------------------------------------------
// 7. Heading animation and reduced motion
// -----------------------------------------------------------------------------
// MDN Web Docs (2026) explains that Intersection Observer reports visibility changes.
// Visibility observation starts animations as headings enter view.
(() => {
  if (
    !window.matchMedia ||
    !window.IntersectionObserver ||
    typeof Element.prototype.animate !== "function"
  )
    return;

  const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
  const headings = [...document.querySelectorAll("main .museum-section h2")];
  const active = new Map();
  const visited = new WeakSet();

  const stop = (heading) => {
    const animation = active.get(heading);
    if (animation) animation.cancel();
    active.delete(heading);
  };

  // -----------------------------------------------------------------------------
  // 8. Observation callback
  // -----------------------------------------------------------------------------
  // MDN Web Docs (2025) explains that animate() starts a Web Animations transition.
  // Element.animate creates the short heading transition.
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(({ target, isIntersecting }) => {
        if (!isIntersecting) return;
        observer.unobserve(target);
        if (visited.has(target)) return;
        visited.add(target);
        // Focused headings and reduced-motion visitors receive the settled view.
        if (preference.matches || target.contains(document.activeElement)) return;
        const animation = target.animate(
          [
            { opacity: 0.85, transform: "translateY(10px)" },
            { opacity: 1, transform: "translateY(0)" },
          ],
          { duration: 380, easing: "ease-out", fill: "none" },
        );
        active.set(target, animation);
        animation.onfinish = () => active.delete(target);
      });
    },
    { threshold: 0.15 },
  );

  // -----------------------------------------------------------------------------
  // 9. Motion preference and observation lifecycle
  // -----------------------------------------------------------------------------
  // MDN Web Docs (2026) explains that matchMedia() reads media-query preferences.
  // matchMedia reports the reduced-motion preference.
  const updatePreference = () => {
    observer.disconnect();
    active.forEach((animation) => animation.cancel());
    active.clear();
    if (preference.matches) return;
    headings.forEach((heading) => {
      // Headings already on screen never move during the initial page load.
      if (heading.getBoundingClientRect().top < window.innerHeight) {
        visited.add(heading);
      } else if (!visited.has(heading)) {
        observer.observe(heading);
      }
    });
  };

  document.addEventListener("focusin", (event) => {
    active.forEach((animation, heading) => {
      if (heading.contains(event.target)) stop(heading);
    });
  });
  if (preference.addEventListener) {
    preference.addEventListener("change", updatePreference);
  } else if (preference.addListener) {
    preference.addListener(updatePreference);
  }
  updatePreference();
})();

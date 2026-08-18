/**
 * @file main.js
 * @description Main application orchestrator for deep-tech developer portfolio.
 */

import { I18nManager } from "./i18n.js";
import { ProjectsFilter } from "./projects-filter.js";

function setupApp() {
  // Initialize internationalization dictionary & switcher
  const i18n = new I18nManager("en");

  // Initialize interactive project category filtering
  const filter = new ProjectsFilter();

  // Smooth scroll links
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href");
      if (targetId === "#") return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", setupApp);
} else {
  setupApp();
}

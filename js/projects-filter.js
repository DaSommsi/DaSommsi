/**
 * @file projects-filter.js
 * @description Handles interactive filtering of project cards based on engineering categories.
 */

export class ProjectsFilter {
  constructor() {
    this.activeFilter = "all";
    this.init();
  }

  init() {
    const filterButtons = document.querySelectorAll("[data-filter-btn]");
    const projectCards = document.querySelectorAll("[data-category]");

    filterButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const selectedCategory = btn.getAttribute("data-filter-btn");
        if (selectedCategory === this.activeFilter) return;

        this.activeFilter = selectedCategory;

        // Update button active styling
        filterButtons.forEach((b) => {
          if (b.getAttribute("data-filter-btn") === selectedCategory) {
            b.className = "px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all bg-blue-500/20 text-blue-400 border border-blue-500/50 shadow-sm shadow-blue-950";
          } else {
            b.className = "px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all text-slate-400 border border-slate-800 hover:text-slate-200 hover:border-slate-700 bg-slate-900/60";
          }
        });

        // Filter cards smoothly
        projectCards.forEach((card) => {
          const cardCategories = card.getAttribute("data-category").split(" ");
          if (selectedCategory === "all" || cardCategories.includes(selectedCategory)) {
            card.style.display = "flex";
            card.classList.add("animate-fadeIn");
          } else {
            card.style.display = "none";
          }
        });
      });
    });
  }
}

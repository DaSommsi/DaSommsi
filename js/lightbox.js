/**
 * @file lightbox.js
 * @description Lightbox Modal image viewer with instant global click-to-zoom capabilities.
 */

// Global Lightbox Functions attached to window for 100% fail-safe click handling
window.openLightbox = function (src, caption) {
  const modal = document.getElementById("lightbox-modal");
  const modalImg = document.getElementById("lightbox-img");
  const captionEl = document.getElementById("lightbox-caption");
  
  if (!modal || !modalImg) return;
  modalImg.classList.remove("scale-150", "cursor-zoom-out");
  modalImg.classList.add("cursor-zoom-in");
  modalImg.src = src;
  if (captionEl) captionEl.textContent = caption || "";
  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
};

window.closeLightbox = function (e) {
  if (e && e.target && e.target.id !== "lightbox-modal" && e.target.id !== "lightbox-close") return;
  const modal = document.getElementById("lightbox-modal");
  if (!modal) return;
  modal.classList.add("hidden");
  document.body.style.overflow = "";
};

window.toggleLightboxZoom = function (e) {
  if (e) e.stopPropagation();
  const modalImg = document.getElementById("lightbox-img");
  if (!modalImg) return;
  if (modalImg.classList.contains("scale-150")) {
    modalImg.classList.remove("scale-150", "cursor-zoom-out");
    modalImg.classList.add("cursor-zoom-in");
  } else {
    modalImg.classList.add("scale-150", "cursor-zoom-out");
    modalImg.classList.remove("cursor-zoom-in");
  }
};

// Global Event Delegation in Capture Phase
document.addEventListener(
  "click",
  (e) => {
    const img = e.target.closest("img");
    if (img && img.id !== "lightbox-img") {
      e.preventDefault();
      e.stopPropagation();
      const caption = img.alt || img.getAttribute("data-caption") || img.nextElementSibling?.textContent || "";
      window.openLightbox(img.src, caption);
    }
  },
  true
);

// Close on Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    window.closeLightbox();
  }
});

export class LightboxViewer {
  constructor() {
    this.init();
  }

  init() {
    // Lightbox is globally ready via window functions
  }
}

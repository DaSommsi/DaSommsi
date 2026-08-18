/**
 * @file lightbox.js
 * @description Lightbox Modal image viewer with robust close & 1.5x zoom magnification behavior.
 */

(function () {
  window.openLightbox = function (src, caption) {
    var modal = document.getElementById("lightbox") || document.getElementById("lightbox-modal");
    var modalImg = document.getElementById("lightbox-img");
    var captionEl = document.getElementById("lightbox-caption");
    
    if (!modal || !modalImg) return;
    modalImg.classList.remove("scale-150", "cursor-zoom-out");
    modalImg.classList.add("cursor-zoom-in");
    modalImg.src = src;
    if (captionEl) captionEl.textContent = caption || "";
    modal.classList.remove("hidden");
    modal.classList.add("flex");
    document.body.style.overflow = "hidden";
  };

  window.closeLightbox = function (e) {
    if (e) e.stopPropagation();
    var modal = document.getElementById("lightbox") || document.getElementById("lightbox-modal");
    if (!modal) return;
    modal.classList.add("hidden");
    modal.classList.remove("flex");
    document.body.style.overflow = "";
  };

  window.toggleLightboxZoom = function (e) {
    if (e) e.stopPropagation();
    var modalImg = document.getElementById("lightbox-img");
    if (!modalImg) return;
    if (modalImg.classList.contains("scale-150")) {
      modalImg.classList.remove("scale-150", "cursor-zoom-out");
      modalImg.classList.add("cursor-zoom-in");
    } else {
      modalImg.classList.add("scale-150", "cursor-zoom-out");
      modalImg.classList.remove("cursor-zoom-in");
    }
  };

  // Intercept clicks exclusively on images with cursor-zoom-in class
  document.addEventListener(
    "click",
    function (e) {
      var img = e.target.closest("img.cursor-zoom-in");
      if (img && img.id !== "lightbox-img") {
        e.preventDefault();
        e.stopPropagation();
        var caption = img.alt || img.getAttribute("data-caption") || (img.nextElementSibling ? img.nextElementSibling.textContent : "");
        window.openLightbox(img.src, caption);
      }
    },
    false
  );

  // Close on Escape key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      window.closeLightbox();
    }
  });
})();

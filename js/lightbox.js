/**
 * @file lightbox.js
 * @description Lightbox Modal image viewer allowing click-to-zoom on project media.
 */

export class LightboxViewer {
  constructor() {
    this.modal = null;
    this.modalImg = null;
    this.captionText = null;
    this.init();
  }

  init() {
    if (document.getElementById("lightbox-modal")) return;

    // Create modal container element
    this.modal = document.createElement("div");
    this.modal.id = "lightbox-modal";
    this.modal.className = "fixed inset-0 z-50 hidden bg-black/90 backdrop-blur-md flex flex-col items-center justify-center p-4 cursor-zoom-out transition-all duration-300";
    
    this.modal.innerHTML = `
      <button id="lightbox-close" class="absolute top-6 right-6 text-white/80 hover:text-white p-2 text-2xl font-mono focus:outline-none z-50">✕</button>
      <div class="max-w-5xl max-h-[85vh] flex flex-col items-center justify-center relative pointer-events-auto">
        <img id="lightbox-img" class="max-w-full max-h-[80vh] object-contain rounded-xl shadow-2xl border border-white/10 transition-transform duration-300">
        <p id="lightbox-caption" class="text-xs font-mono text-zinc-300 mt-4 text-center max-w-xl"></p>
      </div>
    `;

    document.body.appendChild(this.modal);

    this.modalImg = document.getElementById("lightbox-img");
    this.captionText = document.getElementById("lightbox-caption");

    // Close listeners
    this.modal.addEventListener("click", (e) => {
      if (e.target.id === "lightbox-modal" || e.target.id === "lightbox-close") {
        this.close();
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !this.modal.classList.contains("hidden")) {
        this.close();
      }
    });

    // Attach click listener to all gallery images
    this.attachImageListeners();
  }

  attachImageListeners() {
    const images = document.querySelectorAll("img");
    images.forEach((img) => {
      img.classList.add("cursor-zoom-in");
      img.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.open(img.src, img.alt || img.getAttribute("data-caption") || "");
      });
    });
  }

  open(src, caption) {
    if (!this.modalImg) return;
    this.modalImg.src = src;
    this.captionText.textContent = caption;
    this.modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  }

  close() {
    if (!this.modal) return;
    this.modal.classList.add("hidden");
    document.body.style.overflow = "";
  }
}

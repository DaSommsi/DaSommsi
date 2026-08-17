/**
 * @file lightbox.js
 * @description Lightbox Modal image viewer allowing click-to-zoom full-screen image inspection.
 */

export class LightboxViewer {
  constructor() {
    this.modal = null;
    this.modalImg = null;
    this.captionText = null;
    this.init();
  }

  init() {
    if (document.getElementById("lightbox-modal")) {
      this.attachImageListeners();
      return;
    }

    // Create full-screen modal overlay container element
    this.modal = document.createElement("div");
    this.modal.id = "lightbox-modal";
    this.modal.className = "fixed inset-0 z-[9999] hidden bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-4 cursor-zoom-out select-none transition-all duration-300";
    
    this.modal.innerHTML = `
      <button id="lightbox-close" class="absolute top-6 right-8 text-white/80 hover:text-white p-3 text-3xl font-mono focus:outline-none z-[10000] bg-zinc-900/80 rounded-full border border-white/20 hover:scale-110 transition-transform">✕</button>
      
      <div class="w-[94vw] h-[86vh] flex flex-col items-center justify-center relative pointer-events-auto">
        <img id="lightbox-img" class="max-w-[94vw] max-h-[80vh] w-auto h-auto object-contain rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.9)] border border-white/20 transition-all duration-300 scale-100">
        <p id="lightbox-caption" class="text-sm font-mono text-zinc-200 mt-4 text-center max-w-3xl bg-zinc-900/90 px-4 py-2 rounded-xl border border-white/10 shadow-lg"></p>
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
    const images = document.querySelectorAll("img:not(#lightbox-img)");
    images.forEach((img) => {
      img.classList.add("cursor-zoom-in", "transition-transform", "hover:scale-[1.02]");
      img.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        const caption = img.alt || img.getAttribute("data-caption") || img.nextElementSibling?.textContent || "";
        this.open(img.src, caption);
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

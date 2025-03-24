export function renderGallery(): void {
    const app = document.getElementById("app");
    if (app) {
      app.innerHTML = `
        <h1>Gallery</h1>
        <div id="gallery-container" class="row"></div>
      `;
      fetch('src/data/gallery.json')
        .then(response => response.json())
        .then((images: Array<{ url: string; caption: string }>) => {
          const galleryContainer = document.getElementById("gallery-container");
          if (galleryContainer) {
            if (images.length > 0) {
              images.forEach(image => {
                const col = document.createElement("div");
                col.className = "col-md-4 mb-3";
                col.innerHTML = `
                  <a href="${image.url}" data-lightbox="gallery" data-title="${image.caption}">
                    <img src="${image.url}" class="img-fluid" alt="Gallery Image">
                  </a>
                  <p class="text-center mt-2">${image.caption}</p>
                `;
                galleryContainer.appendChild(col);
              });
            } else {
              galleryContainer.innerHTML = '<p class="text-center text-muted">No gallery images available.</p>';
            }
          }
        })
        .catch(() => {
          const galleryContainer = document.getElementById("gallery-container");
          if (galleryContainer) {
            galleryContainer.innerHTML = '<p class="text-danger text-center">Failed to load gallery images. Please try again later.</p>';
          }
        });
    }
  }
  
const gallery = document.querySelector("#festivalGallery");

if (gallery) {
  const slides = Array.from(gallery.querySelectorAll(".carousel-item"));
  const paginationItems = Array.from(
    document.querySelectorAll('[aria-label="Páginas de la galería"] .page-item')
  );

  gallery.addEventListener("slid.bs.carousel", (event) => {
    const activeIndex = slides.indexOf(event.relatedTarget);

    if (activeIndex < 0) {
      return;
    }

    paginationItems.forEach((item) => {
      const pageLink = item.querySelector("[data-bs-slide-to]");

      if (!pageLink) {
        return;
      }

      const isActive = Number(pageLink.getAttribute("data-bs-slide-to")) === activeIndex;
      item.classList.toggle("active", isActive);

      if (isActive) {
        pageLink.setAttribute("aria-current", "page");
      } else {
        pageLink.removeAttribute("aria-current");
      }
    });
  });
}

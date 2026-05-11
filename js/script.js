// Toggle Drop Down Buttons

const toggles = document.querySelectorAll(".service-toggle");

toggles.forEach(toggle => {

   // Start in collapsed state
  toggle.setAttribute("aria-expanded", "false");

  toggle.addEventListener("click", () => {
    const details = toggle.nextElementSibling;

    if (details.style.display === "block") {
      details.style.display = "none";

      // Accessibility or Aria state
      toggle.setAttribute("aria-expanded", "false");

    } else {
      details.style.display = "block";

      // Accessibility or Aria state
      toggle.setAttribute("aria-expanded", "true");
    }
  });
});

// LIGHTBOX for Gallery

const galleryImages = document.querySelectorAll(".portrait-gallery img");

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

function openLightbox(image) {

  lightbox.style.display = "flex";

  lightboxImg.src = image.src;
  lightboxImg.alt = image.alt;

  zoomLevel = 1;
  lightboxImg.style.transform = "scale(1)";

}

function closeLightbox() {
  lightbox.style.display = "none";
}

if (lightbox && lightboxImg) {

  galleryImages.forEach(image => {

    image.addEventListener("click", () => {

      openLightbox(image);

    });

    image.addEventListener("keydown", (event) => {

      if (event.key === "Enter" || event.key === " ") {

        event.preventDefault();
        image.click();

      }

    });

  });

  // Click outside image closes lightbox
  lightbox.addEventListener("click", closeLightbox);

  // Escape key closes lightbox
  document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {
      closeLightbox();
    }

  });

}

// LIGHTBOX ZOOM

let zoomLevel = 1;

if (lightboxImg) {

  lightboxImg.addEventListener("wheel", (event) => {

    event.preventDefault();

    // Zoom in
    if (event.deltaY < 0) {
      zoomLevel += 0.1;
    }

    // Zoom out
    else {
      zoomLevel -= 0.1;
    }

    // Prevent too much zoom, Clamp it between 1 and 3.5
    zoomLevel = Math.min(Math.max(1, zoomLevel), 3.5);

    // Apply zoom
    lightboxImg.style.transform = `scale(${zoomLevel})`;

  });

}

// MOBILE MENU

const menuToggle = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector(".mobile-nav");

if (menuToggle && mobileNav) {

  menuToggle.addEventListener("click", () => {

    // Open/close menu
    mobileNav.classList.toggle("open");

    // Accessibility state
    const isOpen = mobileNav.classList.contains("open");

    menuToggle.setAttribute("aria-expanded", isOpen);

  });

}

// HIDE HEADER ON SCROLL

let lastScrollY = window.scrollY;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {

  // Current scroll position
  const currentScrollY = window.scrollY;

  // Scrolling down
  if (currentScrollY > lastScrollY && currentScrollY > 100) {

    header.classList.add("hide");

    //Close mobile menu safely
    if (mobileNav && menuToggle) {

      mobileNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    }

  } else {

    // Scrolling up
    header.classList.remove("hide");

  }

  // Save current position
  lastScrollY = currentScrollY;

  });

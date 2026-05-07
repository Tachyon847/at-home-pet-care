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

if (lightbox && lightboxImg) {

  galleryImages.forEach(image => {

    image.addEventListener("click", () => {

      lightbox.style.display = "flex";

      lightboxImg.src = image.src;
      lightboxImg.alt = image.alt;

    });

  });

lightbox.addEventListener("click", () => {
  lightbox.style.display = "none";
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

    //Close mobile menu
    mobileNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");

  } else {

    // Scrolling up
    header.classList.remove("hide");

  }

  // Save current position
  lastScrollY = currentScrollY;

});
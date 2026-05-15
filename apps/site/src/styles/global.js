const toggleMobileMenu = () => {
  const navbar = document.getElementById("navbar");
  const mobileMenu = document.getElementById("nav-menu-mobile");
  const hamburguer = document.getElementById("nav-hamburguer");
  const overlay = document.getElementById("nav-overlay");

  if (!navbar || !hamburguer || !mobileMenu || !overlay) return;

  function openMobileMenu() {
    hamburguer.classList.add("active");
    mobileMenu.classList.add("open");
    overlay.classList.add("open");
    hamburguer.setAttribute("aria-expanded", "true");
  }

  function closeMobileMenu() {
    hamburguer.classList.remove("active");
    mobileMenu.classList.remove("open");
    overlay.classList.remove("open");
    hamburguer.setAttribute("aria-expanded", "false");
  }

  hamburguer.addEventListener("click", () => {
    const isOpen = hamburguer.getAttribute("aria-expanded") === "true";
    if (isOpen) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  });

  // Close menu when clicking on overlay
  mobileMenu.addEventListener("click", closeMobileMenu);
  overlay.addEventListener("click", closeMobileMenu);

  // Close menu when pressing Escape key
  document.addEventListener("keydown", e => {
    const isOpen = hamburguer.getAttribute("aria-expanded") === "true";
    if (e.key === "Escape" && isOpen) {
      closeMobileMenu();
    }
  });
  document.addEventListener("scroll", e => {
    if (window.scrollY > 100) {
      navbar.classList.add("slidedown");
    } else {
      navbar.classList.remove("slidedown");
    }
  });
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", toggleMobileMenu);
} else {
  toggleMobileMenu();
}

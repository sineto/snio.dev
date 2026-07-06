function getElements() {
  return {
    navbar: document.getElementById("navbar"),
    mobileMenu: document.getElementById("nav-menu-mobile"),
    hamburguer: document.getElementById("nav-hamburguer"),
    overlay: document.getElementById("nav-overlay"),
  };
}

function openMobileMenu() {
  const { hamburguer, mobileMenu, overlay } = getElements();
  if (!hamburguer || !mobileMenu || !overlay) return;
  hamburguer.classList.add("active");
  mobileMenu.classList.add("open");
  overlay.classList.add("open");
  hamburguer.setAttribute("aria-expanded", "true");
}

function closeMobileMenu() {
  const { hamburguer, mobileMenu, overlay } = getElements();
  if (!hamburguer || !mobileMenu || !overlay) return;
  hamburguer.classList.remove("active");
  mobileMenu.classList.remove("open");
  overlay.classList.remove("open");
  hamburguer.setAttribute("aria-expanded", "false");
}

document.addEventListener("click", (e) => {
  const button = e.target.closest("#nav-hamburguer");
  if (button) {
    const isOpen = button.getAttribute("aria-expanded") === "true";
    if (isOpen) closeMobileMenu();
    else openMobileMenu();
    return;
  }
  if (
    e.target.closest("#nav-overlay") ||
    e.target.closest("#nav-menu-mobile")
  ) {
    closeMobileMenu();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key !== "Escape") return;
  const { hamburguer } = getElements();
  if (hamburguer?.getAttribute("aria-expanded") === "true") {
    closeMobileMenu();
  }
});

document.addEventListener("scroll", () => {
  const { navbar } = getElements();
  if (!navbar) return;
  navbar.classList.toggle("slidedown", window.scrollY > 100);
});

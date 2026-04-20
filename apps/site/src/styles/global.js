const toggleMobileMenu = () => {
  const hamburguer = document.getElementById('nav-hamburguer');
  const mobileMenu = document.getElementById('nav-menu-mobile');

  if (!hamburguer || !mobileMenu) return;

  let isOpen = false;

  function toggleMenu() {
    isOpen = !isOpen;

    hamburguer.classList.toggle('active', isOpen);
    mobileMenu.classList.toggle('open', isOpen);

    hamburguer.setAttribute('aria-expanded', isOpen.toString());
  }

  function closeMobileMenu() {
    if (isOpen) {
      isOpen = false;
      hamburguer.classList.remove('active');
      mobileMenu.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  }

  hamburguer.addEventListener('click', toggleMenu);

  // Close menu when pressing Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isOpen) {
      closeMobileMenu();
    }
  });

  window.closeMobileMenu = closeMobileMenu;
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initMenu);
} else {
  toggleMobileMenu();
}

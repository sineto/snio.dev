const toggleMobileMenu = () => {
  const hamburguer = document.getElementById('nav-hamburguer');
  const mobileMenu = document.getElementById('nav-menu-mobile');
  const overlay = document.getElementById('nav-overlay');

  if (!hamburguer || !mobileMenu) return;

  let isOpen = false;

  function toggleMenu() {
    isOpen = !isOpen;

    hamburguer.classList.toggle('active', isOpen);
    mobileMenu.classList.toggle('open', isOpen);
    overlay?.classList.toggle('open', isOpen);

    hamburguer.setAttribute('aria-expanded', isOpen.toString());
  }

  function closeMobileMenu() {
    if (isOpen) {
      isOpen = false;
      hamburguer.classList.remove('active');
      mobileMenu.classList.remove('open');
      overlay?.classList.remove('open');
      hamburguer.setAttribute('aria-expanded', 'false');
    }
  }

  hamburguer.addEventListener('click', toggleMenu);

  // Close menu when clicking on overlay
  overlay?.addEventListener('click', closeMobileMenu);

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

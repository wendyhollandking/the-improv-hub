/* ============================================================
   navigation.js
   Handles sidebar behavior:
   - Sets the active nav link based on the current page
   - Mobile: open/close sidebar drawer, overlay dimming
============================================================ */

(function () {

  /* --- Active link highlighting ---
     Compare each nav link's href to the current page URL.
     If they match, add the "active" class. */
  function setActiveLink() {
    const currentPath = window.location.pathname;

    // Get just the filename (e.g., "/the-improv-hub/index.html" → "index.html")
    const currentFile = currentPath.split('/').pop() || 'index.html';

    document.querySelectorAll('.nav-link').forEach(function (link) {
      const linkFile = link.getAttribute('href').split('/').pop();

      // Mark as active if the filenames match
      if (linkFile === currentFile) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
      } else {
        link.classList.remove('active');
        link.removeAttribute('aria-current');
      }
    });

    // Special case: if we're at the root or index.html, activate "Home"
    if (currentFile === '' || currentFile === 'index.html') {
      const homeLink = document.querySelector('.nav-link[href*="index"]');
      if (homeLink) {
        homeLink.classList.add('active');
        homeLink.setAttribute('aria-current', 'page');
      }
    }
  }

  /* --- Mobile sidebar toggle ---
     The hamburger button shows/hides the sidebar on small screens. */
  function initMobileMenu() {
    const toggle   = document.getElementById('sidebar-toggle');
    const sidebar  = document.getElementById('sidebar');
    const overlay  = document.getElementById('sidebar-overlay');

    if (!toggle || !sidebar || !overlay) return;

    function openSidebar() {
      sidebar.classList.add('sidebar-open');
      overlay.classList.add('visible');
      toggle.setAttribute('aria-expanded', 'true');
      // Move focus into the sidebar for keyboard users
      sidebar.querySelector('.nav-link, a').focus();
    }

    function closeSidebar() {
      sidebar.classList.remove('sidebar-open');
      overlay.classList.remove('visible');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.focus();
    }

    toggle.addEventListener('click', function () {
      const isOpen = sidebar.classList.contains('sidebar-open');
      isOpen ? closeSidebar() : openSidebar();
    });

    // Close when clicking the overlay
    overlay.addEventListener('click', closeSidebar);

    // Close when pressing Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && sidebar.classList.contains('sidebar-open')) {
        closeSidebar();
      }
    });

    // On mobile, close sidebar after clicking a nav link (navigates away)
    sidebar.querySelectorAll('.nav-link').forEach(function (link) {
      link.addEventListener('click', function () {
        if (window.innerWidth <= 768) {
          closeSidebar();
        }
      });
    });
  }

  /* --- Run on DOM ready --- */
  document.addEventListener('DOMContentLoaded', function () {
    setActiveLink();
    initMobileMenu();
  });

})();

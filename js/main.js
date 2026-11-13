/**
 * MY LITERARY JOURNEY — GREAT BOOKS DIGITAL PORTFOLIO
 * main.js — Navigation, scroll-reveal, accessibility
 */

/* ============================================================
   MOBILE NAVIGATION TOGGLE
   ============================================================ */
(function initNav() {
  const toggle  = document.getElementById('nav-toggle');
  const mobileNav = document.getElementById('nav-mobile');

  if (!toggle || !mobileNav) return;

  toggle.addEventListener('click', function () {
    const isOpen = mobileNav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  });

  // Close on outside click
  document.addEventListener('click', function (e) {
    if (!toggle.contains(e.target) && !mobileNav.contains(e.target)) {
      mobileNav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });

  // Close on Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      mobileNav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.focus();
    }
  });
})();

/* ============================================================
   ACTIVE NAV LINK
   ============================================================ */
(function setActiveNav() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const allLinks = document.querySelectorAll('.nav-primary a, .nav-mobile a');

  allLinks.forEach(function (link) {
    const href = link.getAttribute('href');
    if (!href) return;
    const linkPage = href.split('/').pop();

    // Home
    if ((currentPath === 'index.html' || currentPath === '') && (linkPage === 'index.html' || linkPage === '')) {
      link.classList.add('active');
    } else if (linkPage && linkPage !== '' && linkPage !== 'index.html' && currentPath.startsWith(linkPage.replace('.html', ''))) {
      link.classList.add('active');
    } else if (href === currentPath) {
      link.classList.add('active');
    }
  });
})();

/* ============================================================
   SCROLL REVEAL
   ============================================================ */
(function initScrollReveal() {
  // Respect reduced-motion preference
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  const revealEls = document.querySelectorAll('.reveal');
  if (!revealEls.length) return;

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  revealEls.forEach(function (el) { observer.observe(el); });
})();

/* ============================================================
   HEADER SCROLL SHADOW
   ============================================================ */
(function initHeaderShadow() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  window.addEventListener('scroll', function () {
    if (window.scrollY > 10) {
      header.style.boxShadow = '0 1px 0 #343434, 0 4px 24px rgba(0,0,0,0.5)';
    } else {
      header.style.boxShadow = 'none';
    }
  }, { passive: true });
})();

/* ============================================================
   STUDENT PHOTO — graceful fallback & GIF hover restart
   ============================================================ */
(function initPhotoFallback() {
  const photo = document.getElementById('student-photo');
  if (photo) {
    photo.addEventListener('error', function () {
      const placeholder = document.getElementById('student-photo-placeholder');
      if (placeholder) {
        photo.style.display = 'none';
        placeholder.style.display = 'flex';
      }
    });
  }
})();


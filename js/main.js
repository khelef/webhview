/* ═══════════════════════════════════════
   HolistView — main.js
   Shared UI logic for all pages
═══════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', function () {

  /* ── Hamburger menu ── */
  const toggle   = document.querySelector('.menu-toggle');
  const navItems = document.querySelector('.nav-items');
  const nav      = document.querySelector('.nav');

  if (toggle && navItems && nav) {
    toggle.addEventListener('click', function (e) {
      e.stopPropagation();
      const open = navItems.classList.toggle('active');
      nav.style.display = open ? 'block' : '';
      toggle.innerHTML  = open ? '✕' : '☰';
      toggle.setAttribute('aria-expanded', open);
    });

    /* Close when a nav link is clicked */
    navItems.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navItems.classList.remove('active');
        nav.style.display = '';
        toggle.innerHTML  = '☰';
      });
    });
  }

  /* Close nav when clicking outside */
  document.addEventListener('click', function (e) {
    if (!nav || !toggle) return;
    if (!nav.contains(e.target) && !toggle.contains(e.target)) {
      if (navItems) navItems.classList.remove('active');
      if (nav)      nav.style.display = '';
      if (toggle)   toggle.innerHTML  = '☰';
    }
  });

  /* ── Dropdown menus ── */
  const dropdowns = document.querySelectorAll('.dropdown');
  let closeTimer = null;

  dropdowns.forEach(dd => {
    const btn = dd.querySelector('.dropbtn');
    if (!btn) return;

    /* Open on click (mobile-friendly) */
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      const isOpen = dd.classList.contains('show');
      dropdowns.forEach(d => d.classList.remove('show'));
      if (!isOpen) dd.classList.add('show');
    });

    /* Keep open while mouse is inside dropdown or button */
    dd.addEventListener('mouseenter', () => {
      clearTimeout(closeTimer);
    });

    dd.addEventListener('mouseleave', () => {
      closeTimer = setTimeout(() => {
        dd.classList.remove('show');
      }, 200);
    });
  });

  /* Close on outside click */
  document.addEventListener('click', () => {
    clearTimeout(closeTimer);
    dropdowns.forEach(d => d.classList.remove('show'));
  });

  /* ── Demo form (modal) ── */
  const demoForm     = document.querySelector('#form-demo form');
  const successMsg   = document.getElementById('successMessage');

  if (demoForm && successMsg) {
    demoForm.addEventListener('submit', async function (e) {
      e.preventDefault();
      const data = new FormData(demoForm);

      /* If form has an action URL (Formspree), POST to it */
      if (demoForm.action && demoForm.action !== window.location.href) {
        try {
          const resp = await fetch(demoForm.action, {
            method: 'POST',
            body: data,
            headers: { 'Accept': 'application/json' }
          });
          if (resp.ok) {
            showSuccess();
          } else {
            alert('Une erreur est survenue. Veuillez réessayer.');
          }
        } catch (err) {
          alert('Erreur réseau. Veuillez réessayer.');
        }
      } else {
        /* No action — just show success (dev/demo mode) */
        showSuccess();
      }

      function showSuccess() {
        successMsg.style.display = 'block';
        demoForm.reset();
        setTimeout(() => { successMsg.style.display = 'none'; }, 6000);
      }
    });
  }

  /* ── Sticky header shadow on scroll ── */
  const header = document.querySelector('.header');
  if (header) {
    window.addEventListener('scroll', () => {
      header.style.boxShadow = window.scrollY > 10
        ? '0 2px 20px rgba(109,40,217,0.1)'
        : 'none';
    }, { passive: true });
  }

  /* ── Active nav link highlight ── */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-item > a').forEach(link => {
    const href = link.getAttribute('href');
    if (href && href !== 'javascript:void(0)' && currentPage === href) {
      link.classList.add('active');
    }
  });

});

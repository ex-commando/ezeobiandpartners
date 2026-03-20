/* ===================================================
   EZEOBI & PARTNERS — JavaScript
   =================================================== */

(function () {
  'use strict';

  // ====== NAVBAR SCROLL EFFECT ======
  const navbar = document.getElementById('navbar');
  const scrollTop = document.getElementById('scrollTop');

  function onScroll() {
    const y = window.scrollY;
    // Navbar becomes solid after 80px
    if (y > 80) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    // Scroll-to-top button
    if (y > 500) {
      scrollTop.classList.add('visible');
    } else {
      scrollTop.classList.remove('visible');
    }
    // Active nav link
    updateActiveNavLink();
    // Reveal animations
    revealElements();
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // Run on load

  // ====== SCROLL TO TOP ======
  scrollTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ====== MOBILE MENU ======
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileClose = document.getElementById('mobileClose');
  const overlay = document.getElementById('overlay');

  function openMenu() {
    mobileMenu.classList.add('open');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeMenu() {
    mobileMenu.classList.remove('open');
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', openMenu);
  mobileClose.addEventListener('click', closeMenu);
  overlay.addEventListener('click', closeMenu);

  // Close menu when mobile link clicked
  document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // ====== ACTIVE NAV LINK TRACKING ======
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link:not(.nav-cta)');

  function updateActiveNavLink() {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });
    navLinks.forEach(link => {
      link.classList.remove('active');
      const href = link.getAttribute('href');
      if (href === '#' + current) {
        link.classList.add('active');
      }
    });
  }

  // ====== SMOOTH SCROLL FOR ANCHOR LINKS ======
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  // ====== SCROLL REVEAL ANIMATIONS ======
  const revealTargets = document.querySelectorAll(
    '.practice-card, .why-card, .office-card, .stat-item, .about-text-col, .about-image-col, .section-header, .founder-card, .social-text, .social-highlight, .contact-info-col, .contact-form-col, .mission-inner'
  );

  // Add reveal class
  revealTargets.forEach((el, i) => {
    el.classList.add('reveal');
    // Add staggered delay for grid children
    const parent = el.parentElement;
    const siblings = [...parent.children].filter(c => c.classList.contains('reveal'));
    const idx = siblings.indexOf(el);
    if (idx > 0 && idx <= 5) {
      el.classList.add(`reveal-delay-${idx}`);
    }
  });

  function revealElements() {
    const windowH = window.innerHeight;
    revealTargets.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < windowH - 80) {
        el.classList.add('visible');
      }
    });
  }

  revealElements();

  // ====== CONTACT FORM ======
  const contactForm = document.getElementById('contact-form');
  const formSuccess = document.getElementById('form-success');

  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Basic validation
    const name = document.getElementById('form-name').value.trim();
    const email = document.getElementById('form-email').value.trim();
    const message = document.getElementById('form-message').value.trim();

    if (!name || !email || !message) {
      // Highlight empty required fields
      ['form-name', 'form-email', 'form-message'].forEach(id => {
        const el = document.getElementById(id);
        if (!el.value.trim()) {
          el.style.borderColor = '#e05656';
          setTimeout(() => { el.style.borderColor = ''; }, 3000);
        }
      });
      return;
    }

    // Simulate sending
    const submitBtn = document.getElementById('form-submit');
    submitBtn.textContent = 'Sending…';
    submitBtn.disabled = true;

    setTimeout(() => {
      contactForm.reset();
      submitBtn.textContent = 'Send Message';
      submitBtn.disabled = false;
      formSuccess.style.display = 'flex';
      setTimeout(() => { formSuccess.style.display = 'none'; }, 5000);
    }, 1200);
  });

  // ====== STATS COUNTER ANIMATION ======
  function animateCounters() {
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach(el => {
      const text = el.textContent;
      const num = parseInt(text.replace(/\D/g, ''), 10);
      const suffix = text.replace(/[\d]/g, '');
      if (!num) return;

      let current = 0;
      const duration = 1800;
      const steps = 60;
      const increment = num / steps;
      const interval = duration / steps;

      const timer = setInterval(() => {
        current += increment;
        if (current >= num) {
          current = num;
          clearInterval(timer);
        }
        el.textContent = Math.floor(current) + suffix;
      }, interval);
    });
  }

  // Trigger counter when hero stats come into view
  const heroStats = document.querySelector('.hero-stats');
  let counterStarted = false;
  if (heroStats) {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && !counterStarted) {
        counterStarted = true;
        animateCounters();
        observer.disconnect();
      }
    }, { threshold: 0.5 });
    observer.observe(heroStats);
  }

  // ====== NAVBAR TRANSPARENT ON LOAD ======
  // Initially, make navbar fully transparent (hero handles this via background)
  if (window.scrollY === 0) {
    navbar.style.background = 'transparent';
  }
  navbar.classList.add('scrolled'); // always ensure readable
  // Remove forced style after scroll
  window.addEventListener('scroll', () => {
    if (navbar.style.background) navbar.style.background = '';
  }, { once: true });

})();

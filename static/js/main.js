// =============================================
// BRONX EMERGENCY PLUMBER — Main JS
// =============================================

document.addEventListener('DOMContentLoaded', () => {

  // === MOBILE NAV ===
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('main-nav');

  if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
      nav.classList.toggle('open');
      hamburger.classList.toggle('active');
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!hamburger.contains(e.target) && !nav.contains(e.target)) {
        nav.classList.remove('open');
        hamburger.classList.remove('active');
      }
    });
  }

  // === STICKY HEADER SHADOW ON SCROLL ===
  const header = document.getElementById('site-header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 10) {
        header.style.boxShadow = '0 4px 32px rgba(0,0,0,0.6)';
        header.style.borderBottomColor = 'rgba(249,115,22,0.2)';
      } else {
        header.style.boxShadow = 'none';
        header.style.borderBottomColor = 'rgba(255,255,255,0.08)';
      }
    });
  }

  // === SMOOTH SCROLL FOR ANCHOR LINKS ===
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 140; // account for fixed bars
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  // === FORM SUBMISSION FEEDBACK ===
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      const btn = form.querySelector('.form-submit');
      if (btn) {
        btn.textContent = 'Sending... We\'ll call you shortly.';
        btn.style.background = '#22c55e';
        btn.disabled = true;
      }
    });
  }

  // === CALL TRACKING - LOG CLICKS ===
  document.querySelectorAll('a[href^="tel:"]').forEach(link => {
    link.addEventListener('click', () => {
      // Google Analytics event if present
      if (typeof gtag !== 'undefined') {
        gtag('event', 'call_click', {
          event_category: 'lead',
          event_label: link.href,
        });
      }
      // Facebook Pixel if present
      if (typeof fbq !== 'undefined') {
        fbq('track', 'Contact');
      }
    });
  });

  // === ENTRANCE ANIMATIONS ===
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const animateEls = document.querySelectorAll(
    '.service-card, .review-card, .blog-card, .stat-card, .why-point'
  );

  animateEls.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = `opacity 0.5s ease ${i * 0.06}s, transform 0.5s ease ${i * 0.06}s`;
    observer.observe(el);
  });

});

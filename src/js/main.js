// Mobile menu toggle
function initMobileMenu() {
  const menuBtn = document.querySelector('[data-menu-open]');
  const closeBtn = document.querySelector('[data-menu-close]');
  const menu = document.querySelector('[data-mobile-menu]');

  if (!menuBtn || !menu) return;

  menuBtn.addEventListener('click', () => {
    menu.classList.add('mobile-menu--open');
    document.body.style.overflow = 'hidden';
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      menu.classList.remove('mobile-menu--open');
      document.body.style.overflow = '';
    });
  }

  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('mobile-menu--open');
      document.body.style.overflow = '';
    });
  });
}

// FAQ accordion
function initFAQ() {
  document.querySelectorAll('.faq-item__question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('faq-item--open');

      // Close all
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('faq-item--open'));

      // Toggle current
      if (!isOpen) {
        item.classList.add('faq-item--open');
      }
    });
  });
}

// Intersection Observer for fade-in animations
function initScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  );

  document.querySelectorAll('[data-animate]').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
  });
}

// Smooth scroll for anchor links
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

// Active nav link
function initActiveNav() {
  const currentPath = window.location.pathname;
  document.querySelectorAll('.nav__link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '/' && href === '/')) {
      link.classList.add('nav__link--active');
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initFAQ();
  initScrollAnimations();
  initSmoothScroll();
  initActiveNav();
});

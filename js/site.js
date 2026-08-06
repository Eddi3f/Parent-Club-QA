(() => {
  'use strict';

  document.documentElement.classList.add('js');

  const header = document.querySelector('.site-header');
  const setHeaderState = () => header?.classList.toggle('scrolled', window.scrollY > 8);
  setHeaderState();
  window.addEventListener('scroll', setHeaderState, { passive: true });

  const toggle = document.querySelector('.nav-toggle');
  const navigation = document.getElementById('primaryNav');
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  navigation?.querySelectorAll('a[href]').forEach((link) => {
    if (link.getAttribute('href') === currentPage) link.setAttribute('aria-current', 'page');
  });
  const setMenuState = (isOpen) => {
    navigation?.classList.toggle('open', isOpen);
    toggle?.setAttribute('aria-expanded', String(isOpen));
    document.body.classList.toggle('menu-open', isOpen);
  };

  toggle?.addEventListener('click', () => setMenuState(!navigation?.classList.contains('open')));
  navigation?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setMenuState(false)));
  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setMenuState(false);
  });

  const revealItems = document.querySelectorAll('.reveal');
  if (revealItems.length) {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      revealItems.forEach((item) => item.classList.add('is-visible'));
    } else {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15 });
      revealItems.forEach((item) => observer.observe(item));
    }
  }

  const showSuccessMessage = (formId, noteId, successId) => {
    const form = document.getElementById(formId);
    if (!form) return;
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      form.hidden = true;
      document.getElementById(noteId)?.setAttribute('hidden', '');
      const success = document.getElementById(successId);
      success?.removeAttribute('hidden');
      success?.setAttribute('tabindex', '-1');
      success?.focus();
    });
  };

  // These forms are concept-only until connected to a newsletter/contact provider.
  showSuccessMessage('templateForm', 'formNote', 'formSuccess');
  showSuccessMessage('contactForm', '', 'contactSuccess');
})();
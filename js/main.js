document.addEventListener('DOMContentLoaded', function () {
  const yearNode = document.getElementById('year');
  if (yearNode) {
    yearNode.textContent = new Date().getFullYear();
  }

  const navToggle = document.getElementById('navToggle');
  const siteNav = document.getElementById('siteNav');

  if (navToggle && siteNav) {
    navToggle.addEventListener('click', function () {
      siteNav.classList.toggle('open');
      const expanded = siteNav.classList.contains('open');
      navToggle.setAttribute('aria-expanded', String(expanded));
    });

    siteNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        siteNav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });

    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    siteNav.querySelectorAll('a').forEach(function (link) {
      const href = link.getAttribute('href');
      const linkPage = href ? href.split('/').pop() : '';
      if (linkPage === currentPage || (linkPage === 'index.html' && currentPage === '')) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
      } else {
        link.classList.remove('active');
        link.removeAttribute('aria-current');
      }
    });
  }

  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();
      if (!name || !email || !message) {
        alert('Please fill in the required fields before sending your message.');
        return;
      }
      alert('Thanks, ' + name + '! Your message is ready to be sent. This site does not currently process submissions, so please connect the form to your backend.');
      form.reset();
    });
  }
});

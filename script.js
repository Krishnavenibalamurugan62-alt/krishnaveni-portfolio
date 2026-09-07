const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
const links = [...document.querySelectorAll('.nav-links a')];
const sections = [...document.querySelectorAll('main section[id]')];

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

links.forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      links.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
      });
    }
  });
}, { rootMargin: '-35% 0px -55% 0px', threshold: 0 });

sections.forEach(section => sectionObserver.observe(section));

document.getElementById('year').textContent = new Date().getFullYear();

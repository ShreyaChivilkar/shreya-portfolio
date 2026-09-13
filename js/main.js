// Sticky navbar scroll effect
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Fade-in on scroll
const fadeElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // animate once
      }
    });
  },
  { threshold: 0.15 }
);

fadeElements.forEach(el => observer.observe(el));

// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close menu when a link is clicked (mobile UX)
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

// Rotating role title in the hero section
const rotatingRole = document.getElementById('rotating-role');
const roleNames = [
  'Software Engineer',
  'Machine Learning Engineer',
  'AI Engineer',
  'Full-Stack Engineer',
  'Backend Engineer'
];

if (rotatingRole && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  let roleIndex = 0;

  window.setInterval(() => {
    rotatingRole.classList.add('role-exit');

    window.setTimeout(() => {
      roleIndex = (roleIndex + 1) % roleNames.length;
      rotatingRole.textContent = roleNames[roleIndex];
      rotatingRole.classList.remove('role-exit');
      rotatingRole.classList.add('role-enter');

      rotatingRole.addEventListener('animationend', () => {
        rotatingRole.classList.remove('role-enter');
      }, { once: true });
    }, 220);
  }, 3000);
}

/* =====================================================
   THEME TOGGLE (Light / Dark)
   ===================================================== */

const themeToggle = document.getElementById('theme-toggle');
const root = document.documentElement;

// Load saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  root.setAttribute('data-theme', savedTheme);
  themeToggle.textContent = savedTheme === 'light' ? '◐' : '◑';
}

// Toggle theme on click
themeToggle.addEventListener('click', () => {
  const isLight = root.getAttribute('data-theme') === 'light';
  const newTheme = isLight ? 'dark' : 'light';

  root.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);

  themeToggle.textContent = newTheme === 'light' ? '◐' : '◑';
});

